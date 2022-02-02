import api from "@/helpers/api";
import router from "@/router";

export default {
    state: {
        posts: null,
        onePost: null,
        categories: null,
        pages: {
            is_blog: false
        },
    },
    getters: {
        POSTS: state => {
            return state.posts;
        },
        ONE_POST: state => {
            return state.onePost;
        },
        CATEGORIES: state => {
            return state.categories;
        },
        IS_BLOG_PAGE: state => {
            return state.pages.is_blog;
        },
    },
    mutations: {
        ListPosts(state, payload) {
            state.posts = payload;
        },
        SetOnePost(state, payload) {
            state.onePost = payload;
        },
        ListPostCategories(state, payload) {
            state.categories = payload;
        },
        SetBlogPage(state, payload) {
            state.pages.is_blog = payload;
        },
    },
    actions: {
        async GetOnePost({ getters, dispatch, commit }, postId) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.postShow.replace("{postId}", postId);

                let { data } = await api.get(url);

                commit("SetOnePost", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async ListPosts({ getters, dispatch, commit }) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.get(getters.ROUTERS.postIndex);

                data = data.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));

                commit("ListPosts", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async CreatePost({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.post(getters.ROUTERS.postCreate, payload);

                dispatch("SummonAlert", { message: 'Post created successfully' });

                router.push({ name: "AccountMyBlog" });
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async UpdatePost({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.postUpdate.replace("{postId}", payload.id);

                let { data } = await api.post(url, payload);

                dispatch("SummonAlert", { message: 'Post updated successfully' });

                // router.push({ name: "AccountMyBlog" });
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async DeletePost({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let url = getters.ROUTERS.postDelete.replace("{postId}", payload);

                let { data } = await api.delete(url);

                dispatch("SummonAlert", { message: 'Post deleted successfully' });

                dispatch("ListPosts");
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Error', type: "error" });
                
                return "error";
            }
        },
        async ListPostCategories({ dispatch, getters }, payload) {
            try {
                if (!getters.ROUTERS) await dispatch("GetRouters");

                let { data } = await api.get(getters.ROUTERS.categoryIndex);

                commit("ListPostCategories", data);
            } catch (error) {
                console.log(error);
                dispatch("SummonAlert", { message: 'Get list categories error', type: "error" });
                
                return "error";
            }
        },
        async SetBlogPage({ dispatch, getters, commit }, payload) {
            try {
                commit("SetBlogPage", payload);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
