<template>
  <div class="container light-style flex-grow-1 container-p-y">

    <h4 class="font-weight-bold py-3 mb-4" v-text="pageTitle"></h4>

    <div class="card overflow-hidden">
        <div class="row no-gutters row-bordered row-border-light">
            <AccountNav />

            <slot></slot>
        </div>
    </div>

  </div>
</template>

<script>
import AccountNav from "../views/account/Nav";

export default {
  components: {
      AccountNav
  },
  props: {
    pageTitle: {
        type: String,
        default: "My profile"
    },
  },
  computed: {
    
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>
