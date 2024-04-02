<template>
  <div class="col-md-3 pt-0">
      <div class="list-group list-group-flush account-settings-links">
          <router-link
              class="list-group-item list-group-item-action"
              active-class="active"
              data-toggle="list"
              :to="{ name: 'MyProfile' }"
              exact
          >
              <a>My profile</a>
          </router-link>

          <router-link
              class="list-group-item list-group-item-action"
              v-bind:class="{ 'active': IS_BLOG_PAGE }"
              active-class="active"
              data-toggle="list"
              :to="{ name: 'AccountMyBlog' }"
              exact
          >
              <a>My blog</a>
          </router-link>

          <router-link
              class="list-group-item list-group-item-action"
              active-class="active"
              data-toggle="list"
              :to="{ name: 'Account' }"
              exact
          >
              <a>Edit profile</a>
          </router-link>

          <router-link
              class="list-group-item list-group-item-action"
              to=""
              @click="logout()"
          >
              <a >Logout</a>
          </router-link>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    
  },
  data() {
      return {};
  },
  computed: {
      ...mapGetters([
          "IS_BLOG_PAGE"
      ])
  },
  methods: {
      ...mapActions([
          "Logout"
      ]),
      toMyProfile() {
          this.$router.push({ name: "MyProfile" });
      },
      editProfile() {
        this.$router.push({ name: "Account" });
      },
      logout() {
          this.Logout();
      }
  },
  created() {
      
  }
};
</script>
