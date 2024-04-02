import { createRouter, createWebHistory } from "vue-router";
import { pageRoutes, emailRoutes } from "@/../routes-config.yml";
import store from "../store";

const pr = pageRoutes;

const routes = [
  {
      path: pr.homepage,
      name: "Homepage",
      component: () => import("../views/Homepage.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters.TOKEN ?? localStorage.getItem("token");
  
  const withoutToken = [
      "ErrorPage"
  ];

  /**
   * If current is authorizated, this pages is blocked
   */
  const withTokenDef = [
      "SignUp"
  ];

  // store.commit("Set_Links", false);
  // if (!store.getters.ROUTERS) await store.dispatch("GetRouters");
  
  if (!withoutToken.includes(to.name)) {
      await store.dispatch("RefreshToken");
  }
  
  // if (!withoutToken.includes(to.name) && !isAuthenticated) next({ name: "Login" });
  // if (withTokenDef.includes(to.name) && isAuthenticated) next({ name: "MyProfile" });
  next();
});

export default router;
