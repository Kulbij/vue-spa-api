<template>
  <div class="card">
      <div class="card-body text-center">
          <div class="row">
              <div class="col-4 border-end border-light">
                  <h5 class="text-muted mt-1 mb-2 fw-normal">
                      My posts
                  </h5>

                  <router-link
                      to="/account/blog"
                  >
                      <h2 class="mb-0 fw-bold">
                          {{ USER.my_total_posts }}
                      </h2>
                  </router-link>
              </div>

              <div class="col-4 border-end border-light">
                  <h5 class="text-muted mt-1 mb-2 fw-normal">
                      Published posts
                  </h5>
                  <h2 class="mb-0 fw-bold">
                      {{ USER.my_published_posts }}
                  </h2>
              </div>

              <div class="col-4">
                  <h5 class="text-muted mt-1 mb-2 fw-normal">Follows</h5>

                  <router-link
                      to="/news"
                  >
                      <h2 class="mb-0 fw-bold">98</h2>
                  </router-link>
              </div>

          </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    
  },
  props: {
    buttonText: {
      type: String,
      default: "To Main PAge"
    },
    footerText: {
      type: String
    },
    footerLink: {
      type: String
    },
    footerRouteName: {
      type: String,
      default: "SignUp"
    }
  },
  computed: {
      ...mapGetters([
          "USER"
      ])
  },
  methods: {
    ...mapActions(["AuthTranslate"]),
    toMain() {
        this.$router.push({ name: "Main" });
    },
    toSignUp() {
      this.$router.push({ name: this.footerRouteName });
    }
  },
  created() {
    this.AuthTranslate();
  }
};
</script>
