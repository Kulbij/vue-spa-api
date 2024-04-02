<template>
  <div class="register-page">
      <HomepageLayout>
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
      </HomepageLayout>
  </div>
</template>

<script>
import HomepageLayout from "../components/homepageLayout";
import DomainForm from "../views/forms/DomainForm";

export default {
  components: {
    HomepageLayout,
    DomainForm
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
