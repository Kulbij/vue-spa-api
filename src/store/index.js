import { createStore } from "vuex";

import alert from "./modules/alert";
import auth from "./modules/auth";
import signUp from "./modules/signUp";
import account from "./modules/Account";
import blog from "./modules/Blog";
import category from "./modules/Category";

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		alert,
		auth,
		signUp,
		account,
		blog,
		category,
	}
});
