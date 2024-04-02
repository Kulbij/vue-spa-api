import api from "@/helpers/api";

export default {
    actions: {
        async RegisterUser({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.post(getters.ROUTERS.usersRegister, payload);

                return data;
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        }
    }
};
