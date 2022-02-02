<template>
  <AccountLayout
      :pageTitle="'My profile'"
  >
    <div class="col-md-9">

        <div class="row gutters-sm">

            <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                          <h6 class="mb-0">Name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                          {{ USER.name }}
                      </div>
                    </div>
                    <hr>

                    <div class="row">
                      <div class="col-sm-3">
                          <h6 class="mb-0">Last name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                          {{ USER.last_name }}
                      </div>
                    </div>
                    <hr>

                    <div class="row" v-if="USER.middle_name">
                      <div class="col-sm-3">
                          <h6 class="mb-0">Middle name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                          {{ USER.middle_name }}
                      </div>
                    </div>
                    <hr>

                    <div class="row">
                      <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                          {{ USER.email }}
                      </div>
                    </div>
                    <hr>

                    <div class="row" v-if="USER.phone">
                      <div class="col-sm-3">
                          <h6 class="mb-0">Phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                          {{ USER.phone }}
                      </div>
                    </div>


                  </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body text-center">
                <div class="row">
                    <div class="col-4 border-end border-light">
                        <h5 class="text-muted mt-1 mb-2 fw-normal">My post</h5>

                        <router-link
                            to="/account/blog"
                        >
                            <h2 class="mb-0 fw-bold">116</h2>
                        </router-link>
                    </div>
                    <div class="col-4 border-end border-light">
                        <h5 class="text-muted mt-1 mb-2 fw-normal">Stars</h5>
                        <h2 class="mb-0 fw-bold">87</h2>
                    </div>
                    <div class="col-4">
                        <h5 class="text-muted mt-1 mb-2 fw-normal">Follow</h5>

                        <router-link
                            to="/news"
                        >
                            <h2 class="mb-0 fw-bold">98</h2>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
          
    </div>
  </AccountLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AccountLayout from "../components/AccountLayout";

export default {
  components: {
      AccountLayout
  },
  data() {
      return {};
  },
  computed: {
      ...mapGetters([
          "USER",
      ])
  },
  methods: {
      
  },
  created() {
      
  }
};
</script>
