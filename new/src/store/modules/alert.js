export default {
    state: {
        alertMessage: "empty",
        alertStatus: "error",
        alertVisibility: false,
        alertDecline: false,
        data: null,
    },
    getters: {
      ALERT_MESSAGE: state => {
          return state.alertMessage;
      },
      ALERT_STATUS: state => {
          return state.alertStatus;
      },
      ALERT_VISIBILITY: state => {
          return state.alertVisibility;
      },
      ALERT_DECLINE: state => {
          return state.alertDecline;
      },
      ALERT_DATA: state => {
          return state.data;
      }
    },
    mutations: {
        UpdateAlert(state, { show = true, type = "success", message = "Empty", decline = false, data }) {
            state.alertMessage = message;
            state.alertStatus = type;
            state.alertVisibility = show;
            state.alertDecline = decline;
            state.data = data;

            setTimeout(() => {
                state.alertVisibility = false;
            }, 5000);
        },
        CloseAlert(state) {
            state.alertVisibility = false;
        }
    },
    actions: {
        SummonAlert({ commit }, payload) {
            commit("UpdateAlert", payload);
        },
        CloseAlert({ commit }) {
            commit("CloseAlert");
        }
    }
};
