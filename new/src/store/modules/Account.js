import api from "@/helpers/api";

export default {
    actions: {
        async UpdateUser({ dispatch, getters }, payload) {
            try {
                let { data } = await api.post(getters.ROUTERS.accountUpdate, payload);
                
                dispatch("SummonAlert", { message: 'Updated successfly' });

                return data;
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error saving form', type: "error" });
                
                return "error";
            }
        },
    }
};
