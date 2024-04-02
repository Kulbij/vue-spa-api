<template>
    <div class="login-page">
        <loginLayout>
          <div class="container">
              <div class="center-block">
                  <div class="row">
                      <h3 class="col-sm-offset-3  col-sm-6">Login</h3>
                  </div>
                  <div class="row login-form">
                      <LoginForm/>
                  </div>
              </div>
          </div>
        </loginLayout>
    </div>
</template>

<script>
import loginLayout from "../components/loginLayout";
import LoginForm from "../views/forms/LoginForm";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
      loginLayout,
      LoginForm,
  },
  data() {
      return {};
  },
  computed: {
      
  },
  methods: {
      
  },
};
</script>

<style lang="scss">
.login-form {
  margin-top: 20px;
}

.center-block {
  display: table;
  margin: 0 auto;
}
</style>
