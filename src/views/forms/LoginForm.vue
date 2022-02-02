<template>
<form>
    <div class="col-xs-12 col-md-10">
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <InputText
                      @keyup.enter="login"
                      v-model:value.trim="user.email"
                      :errorText="'Error email'"
                      :valid="validEmail"
                      :label="'Email address'"
                ></InputText>
            </div>
            <div class="col-xs-12 col-md-12">
                <InputText
                    @keyup.enter="login"
                    v-model:value.trim="user.password"
                    :errorText="'Error password'"
                    :valid="validPass"
                    :type="passwordInputType"
                    :label="'Password'"
                >
                    <ButtonShowPass v-model:type="passwordInputType"></ButtonShowPass>
                </InputText>
            </div>
        </div>
    </div>

    <Button
        :class="'btn btn-lg btn-primary btn-block  login-button pull-right'"
        @click="login"
    >Login</Button>
</form>
</template>

<script>

import ButtonShowPass from "../../components/parts/button-show-pass";
import Button from "../../components/parts/button";
import InputText from "../../components/parts/input-text";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ButtonShowPass,
    Button,
    ButtonShowPass,
    InputText
  },
  data() {
    return {
        passwordInputType: "password",
          user: {
              email: "",
              password: ""
          }
    };
  },
  computed: {
      validEmail() {
          let pattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
          return pattern.test(this.user.email);
      },
      validPass() {
          return !(this.user.password.length < 8);
      }
  },
  methods: {
    ...mapActions(["Login", "SummonAlert"]),
      async login(event) {
          event.preventDefault();

          if (this.validEmail && this.validPass) {
              this.Login(this.user);
          }

          else {
              this.SummonAlert({ message: 'Wrong login or password', type: "error" });
          }
      },
  },
};
</script>

<style lang="scss">
.login-button {
  margin-top: 20px;
}
</style>
