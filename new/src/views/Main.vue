<template>
    <h1>Homepage</h1>
    <p>
        Hello world! {{ USER.id }}
    </p>

    <ListPosts />
</template>

<script>
import { mapGetters } from "vuex";
import ListPosts from "@/views/homepage/ListPosts.vue";

export default {
  components: {
      ListPosts
  },
  computed: {
      ...mapGetters([
          "USER"
      ])
  },
};
</script>
