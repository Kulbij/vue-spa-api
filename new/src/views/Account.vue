<template>


  <AccountLayout
    :pageTitle="'Edit profile'"
  >
    <div class="col-md-9">
        <div class="card h-100">
            <div class="card-body">

                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Personal Details</h6>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <InputText
                            :id="'firstName'"
                            :type="'text'"
                            :label="'Name'"
                            :errorText="'First name error'"
                            :autocomplete="name"
                            :valid="validName"
                            v-model:value.trim="user.name"
                            @keyup.enter="update"
                        />
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <InputText
                            :id="'lastName'"
                            :type="'text'"
                            :label="'Last name'"
                            :errorText="'Last name error'"
                            :autocomplete="'last_name'"
                            :valid="validSurname"
                            v-model:value.trim="user.last_name"
                            @keyup.enter="update"
                        />
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <InputText
                            :id="'middleName'"
                            :type="'text'"
                            :label="'Middle name'"
                            :errorText="'Middle name error'"
                            :autocomplete="middle_name"
                            :valid="validMiddleName"
                            v-model:value.trim="user.middle_name"
                            @keyup.enter="update"
                        />
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <InputText
                            :id="'email'"
                            :type="'email'"
                            :label="'Email'"
                            :errorText="'Email error'"
                            :autocomplete="email"
                            :valid="validEmail"
                            v-model:value.trim="user.email"
                            @keyup.enter="update"
                        />
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <InputText
                            :id="'telephone'"
                            :type="'phone'"
                            :label="'Phone'"
                            :errorText="'Phone error'"
                            :autocomplete="phone"
                            :valid="validPhone"
                            v-model:value.trim="user.phone"
                            @keyup.enter="update"
                        />
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <InputTextarea
                            :id="'description'"
                            :label="'Description'"
                            :errorText="'Description error'"
                            :autocomplete="description"
                            :valid="validPhone"
                            v-model:value.trim="user.description"
                            @keyup.enter="update"
                        />
                    </div>
                    
                </div>

                
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">

                            <!-- <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button> -->

                            <Button
                                :class="'btn btn-primary'"

                                @click="update"
                            >Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </AccountLayout>

</template>

<script>
import Inputmask from "inputmask";
import { mapActions, mapGetters } from "vuex";
import AccountLayout from "../components/AccountLayout";
import InputText from "../components/parts/input-text";
import InputTextarea from "../components/parts/input-textarea";

export default {
  components: {
    Inputmask,
    AccountLayout,
    InputText,
    InputTextarea,
  },
  data() {
    return {
        passwordInputType: "password",
        user: {
            name: '',
            last_name: "",
            middle_name: "",
            email: '',
            phone: '',
            description: '',
        },
        validation: {
            email: true,
        },
    };
  },
  computed: {
      ...mapGetters([
          "AUTH_TRANSLATE",
          "VALIDATION_TRANSLATE",
          "USER",
      ]),
      validName() {
          return (this.user.name.length != 0 && !this.user.name.match(/[^А-Яа-яЁёЇїІіЄєҐґa-zA-Z]/));
      },
      validSurname() {
          return (this.user.last_name.length != 0 && !this.user.last_name.match(/[^А-Яа-яЁёЇїІіЄєҐґa-zA-Z]/));
      },
      validMiddleName() {
          if (!this.middle_name) {
              return;
          }

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
      },
  },
  methods: {
    ...mapActions([
        "SummonAlert",
        "UpdateUser",
    ]),
    async update(event) {
        if (
            (this.validName && this.user.name) &&
            (this.validSurname && this.user.last_name) &&
            (this.user.email && this.validEmail) &&
            (this.user.phone && this.validPhone)
        ) {
            this.UpdateUser(this.user);
        }

        else {
            this.SummonAlert({ message: 'Saving form error', type: "error" });
        }
    },
  },
  created() {
      this.user.name = this.USER.name;
      this.user.last_name = this.USER.last_name;
      this.user.middle_name = this.USER.middle_name;
      this.user.email = this.USER.email;
      this.user.phone = this.USER.phone;
      this.user.description = this.USER.description;
  },
  mounted() {
      Inputmask({
          mask: "+38 (099) 999 99 99",
          placeholder: ""
      }).mask("#telephone");
  },
};
</script>
