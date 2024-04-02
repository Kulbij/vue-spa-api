import { createStore } from "vuex";

import alert from "./modules/alert";
import auth from "./modules/auth";
import domain from "./modules/domain";

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		alert,
		auth,
		domain,
	}
});
