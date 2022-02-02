<template>
  <div class="register-layout">
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
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["AUTH_TRANSLATE"])
  },
  methods: {
    ...mapActions(["AuthTranslate"]),
    toMain() {
        this.$router.push({ name: "Main" });
    },
    toSignUp() {
      this.$router.push({ name: this.footerRouteName });
    }
  },
  created() {
    this.AuthTranslate();
  }
};
</script>
