<template>
  <div class="login-layout">
    <header>
        
    </header>

    <div class="main">
        <section class="left-box">
            <slot></slot>
        </section>
    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  props: {
    buttonText: {
      type: String,
      default: "To Main PAge"
    },
    footerText: {
      type: String
    },
    footerLink: {
      type: String
    },
    footerRouteName: {
      type: String,
      default: "SignUp"
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>
