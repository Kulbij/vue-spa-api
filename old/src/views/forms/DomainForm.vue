<template>
<form>
    <div class="col-xs-12 col-md-12">
        <div class="row">
            <div class="col-xs-6 col-md-4">
                <InputText
                    :id="'firstName'"
                    :type="'text'"
                    :label="'First name'"
                    :errorText="'First name error'"
                    :autocomplete="name"
                    :valid="validName"
                    v-model:value.trim="user.name"
                    @keyup.enter="sendForm"
                />
            </div>
            <div class="col-xs-6 col-md-4">
                <InputText
                    :id="'lastName'"
                    :type="'text'"
                    :label="'Last name'"
                    :errorText="'Last name error'"
                    :autocomplete="last_name"
                    :valid="validSurname"
                    v-model:value.trim="user.last_name"
                    @keyup.enter="sendForm"
                />
            </div>
            <div class="col-xs-6 col-md-4">
                <InputText
                    :id="'middleName'"
                    :type="'text'"
                    :label="'Middle name'"
                    :errorText="'Middle name error'"
                    :autocomplete="middle_name"
                    :valid="validMiddleName"
                    v-model:value.trim="user.middle_name"
                    @keyup.enter="sendForm"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6 col-md-6">
                <InputText
                    :id="'email'"
                    :type="'email'"
                    :label="'Email'"
                    :errorText="'Email error'"
                    :autocomplete="email"
                    :valid="validEmail"
                    v-model:value.trim="user.email"
                    @keyup.enter="sendForm"
                />
            </div>
            <div class="col-xs-6 col-md-6">
                <InputText
                    :id="'telephone'"
                    :type="'phone'"
                    :label="'Phone'"
                    :errorText="'Phone error'"
                    :autocomplete="phone"
                    :valid="validPhone"
                    v-model:value.trim="user.phone"
                    @keyup.enter="sendForm"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6 col-md-6">
                <InputText
                    :id="'password'"
                    :type="registerPassword.passwordInputType"
                    :label="'Password'"
                    :errorText="'Password error'"
                    :autocomplete="password"
                    :valid="validPassword"
                    v-model:value.trim="user.password"
                    @keyup.enter="sendForm"
                >
                    <ButtonShowPass v-model:type="registerPassword.passwordInputType"></ButtonShowPass>
                </InputText>
            </div>
            <div class="col-xs-6 col-md-6">
                <InputText
                    :id="'passwordConfirm'"
                    :type="registerPassword.passwordConfirmInputType"
                    :label="'Confirm password'"
                    :errorText="'Confim password error'"
                    :autocomplete="password_confirmation"
                    :valid="validPasswordConfirm"
                    v-model:value.trim="user.password_confirmation"
                    @keyup.enter="sendForm"
                >
                    <ButtonShowPass v-model:type="registerPassword.passwordConfirmInputType"></ButtonShowPass>
                </InputText>
            </div>
        </div>
    </div>

    <Button
        :class="'btn btn-lg btn-primary btn-block signup-btn register-button'"
        @click="sendForm"
    >Register</Button>
</form>
</template>

<script>

import Inputmask from "inputmask";
import ButtonShowPass from "../../components/parts/button-show-pass";
import Button from "../../components/parts/button";
import InputText from "../../components/parts/input-text";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Inputmask,
    Button,
    ButtonShowPass,
    InputText
  },
  data() {
    return {
        passwordInputType: "password",
        user: {
            name: "",
            last_name: "",
            middle_name: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
        },
        validation: {
            email: true,
        },
        registerPassword: {
            show: false,
            passwordInputType: "password",
            passwordConfirmInputType: "password",
            valueInputPassword: "",
            valueInputPasswordConfirm: ""
        }
    };
  },
  computed: {
      ...mapGetters([
          "AUTH_TRANSLATE",
          "VALIDATION_TRANSLATE",
      ]),
      validName() {
          return (this.user.name.length != 0 && !this.user.name.match(/[^А-Яа-яЁёЇїІіЄєҐґa-zA-Z]/));
      },
      validSurname() {
          return (this.user.last_name.length != 0 && !this.user.last_name.match(/[^А-Яа-яЁёЇїІіЄєҐґa-zA-Z]/));
      },
      validMiddleName() {
          return !this.user.middle_name.match(/[^А-Яа-яЁёЇїІіЄєҐґa-zA-Z]/);
      },
      validEmail() {
        let pattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        this.validation.email = false;

        return (this.user.email.length != 8 && pattern.test(this.user.email));
      },
      validPhone() {
          return !(this.user.phone.length < 19);
      },
      validPassword() {
          return this.user.password.length > 6 || this.user.password == this.user.password_confirmation
      },
      validPasswordConfirm() {
          return !(this.user.password_confirmation.length < 6);
      }
  },
  methods: {
    ...mapActions([
        "SummonAlert",
    ]),

    async sendForm(event) {
        event.preventDefault();

        if (
            (this.validName && this.user.name) &&
            (this.validSurname && this.user.last_name) &&
            (this.user.email && this.validEmail) &&
            (this.user.phone && this.validPhone)
        ) {
            let user = { ...this.user };

            this.Register(user);
        }

        else {
            this.SummonAlert({ message: 'Registration error', type: "error" });
        }
    },
    goToPassRecovery() {
      this.$router.push({ name: "PasswordRecovery" });
    }
  },
  mounted() {
      Inputmask({
          mask: "+38 (099) 999 99 99",
          placeholder: ""
      }).mask("#telephone");
  },
  watch: {
    user: {
      handler() {
        this.user.phone = document.querySelector("#telephone").value;
      },
      deep: true
    }
  },
  created() {
    
  }
};
</script>

<style lang="scss">
.sign-up-page {
  height: 100%;
  width: 100%;
  .left-box {
    max-width: 710px;
  }
  .content {
    padding: 49px 0 19px 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 740px) {
      &.confirmed {
        justify-content: center;
      }
    }
    @media (max-width: 740px) {
      &.confirmed {
        justify-content: flex-start;
      }
    }
    h2 {
      font-weight: 400;
      color: var(--dark-100);

      @media (min-width: 768px) {
        margin-bottom: 8px;
      }

      @media (max-width: 767px) {
        margin-bottom: 7px;
      }
    }
  }
  .title-hint {
    margin-bottom: 50px;
    color: var(--dark-40);
    font-size: 14px;
    letter-spacing: 0.43px;

    @media (max-width: 767px) {
      line-height: 24px;
    }
  }
  .form-inputs {
    display: flex;
    flex-wrap: wrap;
    .main {
      margin-bottom: 35px;
      width: 50%;
    }
    @media (min-width: 740px) {
      .input-box:first-child {
        margin-right: 20px;
      }
    }
    svg {
      color: var(--dark-40);
    }
    &:focus-within {
      svg {
        color: var(--blue-main);
      }
      .not-valid {
        svg {
          color: var(--error);
        }
      }
    }
  }
  .form-btns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    button {
      margin-right: 20px;
      margin-bottom: 20px;
    }
    button.white:hover {
      background: var(--bg-white);
      color: var(--blue-main);
    }
  }
  @media (max-width: 1024px) and (min-width: 760px) {
    .custom-select {
      margin-right: 20px;
    }
  }
  @media (max-width: 1024px) {
    .form-inputs .main {
      width: 100%;
    }
    .custom-select {
      width: 100%;
    }
    .left-box {
      min-width: 500px;
    }
    .form-inputs {
      flex-wrap: wrap;
      .main:first-child {
        margin-bottom: 30px;
      }
    }
    .content {
      padding-top: 85px;
    }
    .message-bottom {
      bottom: 20px;
    }
  }
  @media (max-width: 764px) {
    .content {
      padding-top: 36px;
    }
    .login-layout header {
      background: var(--white-100);
      padding: 12px 0 12px 21px;
      img {
        margin: auto 0;
      }
    }
    .right-box {
      background-color: var(--bg-main);
      position: absolute;
      top: 0;
      margin-top: 72px;
      max-height: 98px;
      min-height: 98px;
    }
    .content {
      padding-right: 20px;
    }
    .main {
      min-width: 200px;
    }
    .left-box {
      min-width: 320px;
      padding-top: 170px;
    }
    .message-bottom {
      top: 674px;
      p.m-text-des {
        padding-bottom: 20px;
      }
    }
  }
  @media (max-width: 370px) {
    .form-btns {
      flex-direction: column;
      align-items: flex-start;
      .white {
        margin-top: 20px;
      }
    }
  }
  .policy {
    display: block;
    color: var(--dark-40);
    font-size: 12px;
    margin-bottom: 20px;
    letter-spacing: 0.5px;

    &-link {
      color: var(--blue-main);
      text-decoration: none;
    }
  }
  .blue-text {
    color: var(--blue-main);
    font-family: "Aeonik Pro Regular", sans-serif;
  }

  .maxi-title {
    max-width: 494px;
  }
}
</style>
