<template>
    <h1>Users</h1>
    
    <UserList />
</template>

<script>
import { mapGetters } from "vuex";
import UserList from "@/views/users/List.vue";

export default {
  components: {
      UserList
  },
};
</script>
