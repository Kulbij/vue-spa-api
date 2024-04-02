import api from "@/helpers/api";
import router from "@/router";
import { apiRoutes } from "@/../routes-config.yml";

export default {
  state: {
      token: null,
      user: null,
      permissionRefreshToken: true,
      routers: null
  },
  getters: {
      TOKEN: state => {
          return state.token;
      },
      USER: state => {
          return state.user;
      },
      PERMISSION_REFRESH_TOKEN: state => {
          return state.permissionRefreshToken;
      },
      ROUTERS: state => {
          return state.routers;
      }
  },
  mutations: {
      Token(state, payload) {
          state.token = payload;
      },
      User(state, payload) {
          state.user = payload;
      },
      TokenRefresh(state, payload) {
          state.permissionRefreshToken = payload;
      },
      GetRouters(state, payload) {
          state.routers = payload;
      }
  },
  actions: {
    
    async RefreshToken({ dispatch, commit, getters }) {
      try {
        let time = new Date();
        let tokenTime = localStorage.getItem("token-time");
        let tokenLife = localStorage.getItem("token-life");
        if (!tokenTime || !tokenLife) return dispatch("Logout");

        let tokenAge = Math.floor((time.getTime() - tokenTime) / 1000);
        let condition = tokenAge > Math.floor(tokenLife * 0.6);

        if (condition && getters.PERMISSION_REFRESH_TOKEN) {
          commit("TokenRefresh", false);

          let { data } = await api.post(getters.ROUTERS.authTokenRefresh);

          localStorage.setItem("token", data.access_token);
          localStorage.setItem("token-time", time.getTime());
          localStorage.setItem("token-life", data.expires_in);

          commit("Token", data.access_token);
          commit("User", data.user);
          commit("TokenRefresh", true);
        }
      } catch (error) {
        commit("TokenRefresh", true);
        console.log("RefreshToken", error.response);
        dispatch("Logout");
        dispatch("SummonAlert", { message: getters.VALIDATION_TRANSLATE?.common?.text, type: "error" });
      }
    },
    
    async GetRouters({ dispatch, commit, getters }) {
        try {
            let url;

            if (!getters.ROUTERS) {
                url = apiRoutes.routesIndex;
            } else {
                url = getters.ROUTERS.routesIndex;
            }

            let { data } = await api.get(url);
            let key = Object.keys(data);
            commit("GetRouters", data[key[0]]);
            // if (!getters.VALIDATION_TRANSLATE) await dispatch("ValidationTranslate");

            return true;
        } catch (error) {
            console.log(error.response);
            dispatch("SummonAlert", { message: getters.VALIDATION_TRANSLATE?.common?.text, type: "error" });
            
            return false;
        }
    }
  }
};
