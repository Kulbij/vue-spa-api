<template>
    <Alert></Alert>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link
          class="navbar-brand"
          @click="toHomepage()"
          to=""
      >
          <a>DataForSeo</a>
      </router-link>
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
      toHomepage() {
          this.$router.push({ name: "Homepage" });
      },
  },
};
</script>
