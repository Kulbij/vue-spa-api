import { createRouter, createWebHistory } from "vue-router";
import { pageRoutes, emailRoutes } from "@/../routes-config.yml";
import store from "../store";

const pr = pageRoutes;

const routes = [
  {
      path: pr.profile,
      name: "MyProfile",
      component: () => import("../views/MyProfile.vue"),
      meta: {
          seoName: "profile"
      },
      beforeEnter: (to, from, next) => {
          store.dispatch("AboutMe");
          next();
      }
  },
  {
      path: pr.account,
      name: "Account",
      component: () => import("../views/Account.vue"),
      meta: {
          seoName: "account"
      },
  },
  {
      path: pr.accountMyBlog,
      name: "AccountMyBlog",
      component: () => import("../views/account/post/List.vue"),
      meta: {
          seoName: "my-blog"
      },
  },
  {
      path: pr.accountPostCreate,
      name: "accountPostCreate",
      component: () => import("../views/account/post/Add.vue"),
  },
  {
      path: pr.accountPostUpdate,
      name: "AccountPostEdit",
      component: () => import("../views/account/post/Edit.vue"),
      props: true,
  },

  {
      path: pr.accountMyBlogCategories,
      name: "AccountMyBlogCategories",
      component: () => import("../views/account/category/List.vue"),
  },
  {
      path: pr.accountCategoryCreate,
      name: "AccountCategoryCreate",
      component: () => import("../views/account/category/Add.vue"),
  },
  {
      path: pr.accountCategoryUpdate,
      name: "AccountCategoryEdit",
      component: () => import("../views/account/category/Edit.vue"),
      props: true,
  },

  {
      path: pr.accountMyBlogTags,
      name: "AccountMyBlogTags",
      component: () => import("../views/account/tag/List.vue"),
  },
  {
      path: pr.accountTagCreate,
      name: "AccountTagCreate",
      component: () => import("../views/account/tag/Add.vue"),
  },
  {
      path: pr.accountTagUpdate,
      name: "AccountTagEdit",
      component: () => import("../views/account/tag/Edit.vue"),
      props: true,
  },

  {
      path: pr.users,
      name: "UserList",
      component: () => import("../views/UserList.vue"),
      meta: {
          seoName: "users"
      },
      beforeEnter: (to, from, next) => {
          store.dispatch("AboutMe");
          next();
      }
  },

  {
      path: pr.register,
      name: "SignUp",
      component: () => import("../views/Register.vue"),
      meta: {
          seoName: "register"
      },
      beforeEnter: (to, from, next) => {
          store.commit("User", null);
          next();
      }
  },
  {
    path: pr.login,
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
        seoName: "login"
    },
    beforeEnter: (to, from, next) => {
        store.commit("User", null);
        next();
    }
  },
  // {
  //     path: `${emailRoutes.passwordCreateToken}/:token`,
  //     name: "CatchEmailCreate",
  //     beforeEnter: (to, from, next) => {
  //         store.dispatch("UpdateEmailToken", to.params.token);
  //         next({ name: "PasswordCreate" });
  //     }
  // },
  // {
  //     path: `${emailRoutes.passwordRestoreToken}/:token`,
  //     name: "CatchEmailRestore",
  //     beforeEnter: (to, from, next) => {
  //         store.dispatch("UpdateEmailToken", to.params.token);
  //         next({ name: "PasswordRestore" });
  //     }
  // },
  {
      path: pr.main,
      name: "Main",
      component: () => import("../views/Main.vue"),
  },
  // {
  //   path: pr.passwordRecovery,
  //   name: "PasswordRecovery",
  //   component: () => import("../views/Password-recovery.vue"),
  //   meta: {
  //     seoName: "passwordRecovery"
  //   },
  //   beforeEnter: (to, from, next) => {
  //     store.commit("User", null);
  //     next();
  //   }
  // },
  // {
  //   path: pr.passwordCreate,
  //   name: "PasswordCreate",
  //   component: () => import("../views/Password-create.vue"),
  //   meta: {
  //     seoName: "passwordCreate"
  //   },
  //   beforeEnter: (to, from, next) => {
  //     store.commit("User", null);
  //     next();
  //   }
  // },
  // {
  //   path: pr.passwordRestore,
  //   name: "PasswordRestore",
  //   component: () => import("../views/Password-restore.vue"),
  //   meta: {
  //     seoName: "passwordRestore"
  //   },
  //   beforeEnter: (to, from, next) => {
  //     store.commit("User", null);
  //     next();
  //   }
  // },
  // {
  //   path: pr.signUp,
  //   name: "SignUp",
  //   component: () => import("../views/Sign-up.vue"),
  //   meta: {
  //     seoName: "signUp"
  //   },
  //   beforeEnter: (to, from, next) => {
  //     store.commit("User", null);
  //     next();
  //   }
  // },
  // {
  //   path: pr.settings,
  //   name: "Settings",
  //   component: () => import("../views/Settings.vue"),
  //   meta: {
  //     seoName: "settings"
  //   },
  //   beforeEnter: async (to, from, next) => {
  //     try {
  //       if (!store.getters.SETTINGS_TRANSLATE) await store.dispatch("SettingsTranslate");
  //       if (!store.getters.VALIDATION_TRANSLATE) await store.dispatch("ValidationTranslate");
  //     } catch (error) {
  //       console.log(error);
  //       store.dispatch("SummonAlert", { message: store.getters.VALIDATION_TRANSLATE?.common?.text, type: "error" });
  //       next({ name: "Login" });
  //     }
  //     next();
  //   }
  // },
  // {
  //   path: pr.dishes,
  //   name: "Dishes",
  //   component: () => import("../views/Dishes.vue"),
  //   meta: {
  //     seoName: "dishes"
  //   },
  //   beforeEnter: async (to, from, next) => {
  //     try {
  //       store.commit("Set_Id", "navDishes");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     next();
  //   }
  // },
  // {
  //   path: pr.payment,
  //   name: "Payment",
  //   component: () => import("../views/Payment.vue"),
  //   meta: {
  //     seoName: "payment"
  //   }
  // },
  // {
  //   path: pr.orderHistory,
  //   name: "OrderHistory",
  //   component: () => import("../views/Order-history.vue"),
  //   meta: {
  //     seoName: "orderHistory"
  //   },
  //   beforeEnter: async (to, from, next) => {
  //     try {
  //       store.commit("Set_Id", "navOrders");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     next();
  //   }
  // },
  // {
  //   path: pr.employees,
  //   name: "Employees",
  //   component: () => import("../views/Employees.vue"),
  //   meta: {
  //     seoName: "employees"
  //   },
  //   beforeEnter: async (to, from, next) => {
  //     store.commit("Set_Id", "navEmployees");
  //     if (!store.getters.USER) {
  //       await store.dispatch("AboutMe");
  //     }
  //     if (store.getters.USER.role.id == 2) return next();
  //     next("/404");
  //   }
  // },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "ErrorPage",
  //   component: () => import("../views/Page-404.vue"),
  //   meta: {
  //     seoName: "notFound"
  //   }
  // }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters.TOKEN ?? localStorage.getItem("token");
  
  const withoutToken = [
      "Login",
      "PasswordRestore",
      "PasswordRecovery",
      "PasswordCreate",
      "CatchEmailCreate",
      "CatchEmailRestore",
      "SignUp",
      "ErrorPage",
  ];

  /**
   * If current is authorizated, this pages is blocked
   */
  const withTokenDef = [
      "Login",
      "PasswordRestore",
      "PasswordRecovery",
      "PasswordCreate",
      "CatchEmailCreate",
      "CatchEmailRestore",
      "SignUp",
  ];

  // store.commit("Set_Links", false);
  if (!store.getters.ROUTERS) await store.dispatch("GetRouters");
  
  if (!withoutToken.includes(to.name)) {
      if (!store.getters.USER) await store.dispatch("AboutMe");
      await store.dispatch("RefreshToken");
  }
  
  if (!withoutToken.includes(to.name) && !isAuthenticated) next({ name: "Login" });
  if (withTokenDef.includes(to.name) && isAuthenticated) next({ name: "MyProfile" });
  next();
});

export default router;
