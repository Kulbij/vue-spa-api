<template>
  <div class="container light-style flex-grow-1 container-p-y">

    <h4 class="font-weight-bold py-3 mb-4" v-text="pageTitle"></h4>

    <div class="card overflow-hidden">
        <div class="row no-gutters row-bordered row-border-light">
            <slot></slot>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
      
  },
  props: {
    pageTitle: {
        type: String,
        default: "Create Domain"
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
