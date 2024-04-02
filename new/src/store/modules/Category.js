import api from "@/helpers/api";
import router from "@/router";

export default {
    state: {
        categories: null,
        oneCategory: null,
    },
    getters: {
        CATEGORIES: state => {
            return state.categories;
        },
        ONE_CATEGORY: state => {
            return state.oneCategory;
        },
    },
    mutations: {
        ListCategories(state, payload) {
            state.categories = payload;
        },
        SetOneCategory(state, payload) {
            state.oneCategory = payload;
        },
    },
    actions: {
        async GetOneCategory({ getters, dispatch, commit }, categoryId) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.categoryShow.replace("{categoryId}", categoryId);

                let { data } = await api.get(url);

                commit("SetOneCategory", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Show category error', type: "error" });
                
                return "error";
            }
        },
        async ListCategories({ getters, dispatch, commit }) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");


                let { data } = await api.get(getters.ROUTERS.categoryIndex);

                data = data.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));

                commit("ListCategories", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error get list categories', type: "error" });
                
                return "error";
            }
        },
        async CreateCategory({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.post(getters.ROUTERS.categoryCreate, payload);

                dispatch("SummonAlert", { message: 'Category created successfully' });

                router.push({ name: "AccountMyBlogCategories" });
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error created category', type: "error" });
                
                return "error";
            }
        },
        async UpdateCategory({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.categoryUpdate.replace("{categoryId}", payload.id);

                let { data } = await api.post(url, payload);

                dispatch("SummonAlert", { message: 'Post updated successfully' });

                // router.push({ name: "AccountMyBlog" });
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async DeleteCategory({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.categoryDelete.replace("{categoryId}", payload);

                let { data } = await api.delete(url);

                dispatch("SummonAlert", { message: 'Category deleted successfully' });

                dispatch("ListCategories");
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
    }
};
