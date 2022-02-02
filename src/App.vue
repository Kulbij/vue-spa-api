<template>
    <Alert></Alert>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link
          class="navbar-brand"
          @click="toHomepage()"
          to=""
      >
          <a>Blog</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <router-link
                  v-if="!USER"
                  class="nav-item nav-link"
                  @click="login()"
                  to=""
              >
                  <a>Login</a>
              </router-link>

              <router-link
                  v-if="!USER"
                  class="nav-item nav-link"
                  @click="toSignUp()"
                  to=""
              >
                  <a>Register</a>
              </router-link>

              <router-link
                  v-if="USER"
                  class="nav-item nav-link"
                  @click="toMyProfile()"
                  to=""
              >
                  <a>
                      {{ USER.full_name }}
                  </a>
              </router-link>

              <a
                  v-if="USER"
                  class="nav-item nav-link"
                  @click="logout()"
                  to=""
              >
                  <a >Logout</a>
              </a>
          </div>
      </div>
    </nav>

    <router-view />
</template>

<script>

import Alert from "@/components/alert-setting.vue";
import InfoMessage from "@/components/parts/info-message";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
      Alert,
      InfoMessage
  },
  methods: {
      ...mapActions(["Logout"]),
      toHomepage() {
          this.$router.push({ name: "Main" });
      },
      toSignUp() {
          this.$router.push({ name: "SignUp" });
          const body = document.querySelector("body");
          body.classList.remove("overflowed");
      },
      login() {
          this.$router.push({ name: "Login" });
      },
      toMyProfile() {
          this.$router.push({ name: "MyProfile" });
      },
      logout() {
          this.Logout();
      }
  },
  computed: {
      ...mapGetters([
          "USER",
          "AboutMe",
      ])
  },
  async mounted() {
    
  }
};
</script>
