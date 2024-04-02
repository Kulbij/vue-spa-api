import api from "@/helpers/api";

import { apiRoutes } from "@/../routes-config.yml";

export default {
    state: {
        domains: null,
        errors: null,
    },
    getters: {
        DOMAINS: state => {
            return state.domains;
        },
        DOMAINERRORS: state => {
            return state.errors;
        },
    },
    mutations: {
        GetDomains(state, payload) {
            state.domains = payload;
        },
        SetErrors(state, payload) {
            state.errors = payload;
        },
    },
    actions: {
        async GetDomains({ getters, dispatch, commit }, payload) {
            try {
                let url = apiRoutes.domainCreate;

                let { data } = await api.post(url, payload);

                commit("GetDomains", data);
                commit("SetErrors", null);
            } catch (error) {
                console.log('Received error:', payload);
                commit("SetErrors", error?.response);
                dispatch("SummonAlert", { message: error?.response?.data?.message, type: "error" });
            }
        },
    }
};
