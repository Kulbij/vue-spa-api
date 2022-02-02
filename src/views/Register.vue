<template>
  <div class="register-page">
      <RegisterLayout>
          <div class="container">
              <div class="row">
                  <h3 class="col-sm-offset-3  col-sm-6">Signup</h3>
              </div>
              <div class="row register-form">
                  <div class="col-sm-10">
                      <RegisterForm/>
                  </div>
              </div>
          </div>
      </RegisterLayout>
  </div>
</template>

<script>
import RegisterLayout from "../components/RegisterLayout";
import RegisterForm from "../views/forms/RegisterForm";

export default {
  components: {
    RegisterLayout,
    RegisterForm
  },
  data() {
    return {
        
    };
  },
  computed: {
    
  },
  methods: {

  },
  created() {
    
  }
};
</script>
<style lang="scss">
.register-form {
  margin-top: 20px;
}
</style>
