import api from "@/helpers/api";
import router from "@/router";

export default {
    state: {
        tags: null,
        oneTag: null,
    },
    getters: {
        TAGS: state => {
            return state.tags;
        },
        ONE_TAG: state => {
            return state.oneTag;
        },
    },
    mutations: {
        ListTags(state, payload) {
            state.tags = payload;
        },
        SetOneTag(state, payload) {
            state.oneTag = payload;
        },
    },
    actions: {
        async GetOneTag({ getters, dispatch, commit }, tagId) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.tagShow.replace("{tagId}", tagId);

                let { data } = await api.get(url);

                commit("SetOneTag", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Show tag error', type: "error" });
                
                return "error";
            }
        },
        async ListTags({ getters, dispatch, commit }) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.get(getters.ROUTERS.tagIndex);

                data = data.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));

                commit("ListTags", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error get list tags', type: "error" });
                
                return "error";
            }
        },
        async CreateTag({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.post(getters.ROUTERS.tagCreate, payload);

                dispatch("SummonAlert", { message: 'Tag created successfully' });

                router.push({ name: "AccountMyBlogTags" });
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error created tag', type: "error" });
                
                return "error";
            }
        },
        async UpdateTag({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.tagUpdate.replace("{tagId}", payload.id);

                let { data } = await api.post(url, payload);

                dispatch("SummonAlert", { message: 'Tag updated successfully' });
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async DeleteTag({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.tagDelete.replace("{tagId}", payload);

                let { data } = await api.delete(url);

                dispatch("SummonAlert", { message: 'Tag deleted successfully' });

                dispatch("ListTags");
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
    }
};
