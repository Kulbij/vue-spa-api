import api from "@/helpers/api";
import router from "@/router";

export default {
    state: {
        domains: null
    },
    getters: {
        DOMAINS: state => {
            return state.domains;
        },
    },
    mutations: {
        GetDomains(state, payload) {
            state.domains = payload;
        },
    },
    actions: {
        async GetDomains({ getters, dispatch, commit }, payload) {
            try {
                // if (!getters.ROUTERS) await dispatch("GetRouters");


                let { data } = await api.post('/domains', payload);

                commit("GetDomains", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error get list domains', type: "error" });
                
                return "error";
            }
        },
    }
};
