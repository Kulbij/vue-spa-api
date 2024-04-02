import api from "@/helpers/api";

export default {
    state: {
        users: null
    },
    getters: {
        USERS: state => {
            return state.users;
        },
    },
    mutations: {
        ListUsers(state, payload) {
            state.users = payload;
        },
    },
    actions: {
        async ListUsers({ dispatch, getters }, payload) {
            try {
                let { data } = await api.post(getters.ROUTERS.usersList);

                commit("ListUsers", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error loading list users', type: "error" });
                
                return "error";
            }
        },
    }
};
