<template>
    <button :class="class" @click="clickBtn">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    props: {
        class: {
            type: String,
            default: "button"
        }
    },
    methods: {
        clickBtn() {
            this.$emit("btnSubmit");
        }
    }
};
</script>

<style lang="scss" scoped>
button {
  transition: 0.2s ease-out;
  cursor: pointer;
  padding: 0 16px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  outline: none;
}
.blue {
  color: var(--white-100);
  background: var(--blue-main);
  &:hover {
    background: var(--blue-btn-hover);
  }
}
.white {
  color: var(--blue-main);
  background: var(--white-100);
  &:hover {
    background: var(--blue-main);
    color: var(--white-100);
  }
}
.grey {
  color: var(--dark-40);
  background: var(--bg-main);
}
.error {
  color: var(--white-100);
  background: var(--error);
  &:hover {
    background: var(--error-hover);
    color: var(--white-100);
  }
}

.register-button {
    margin-top: 20px;
}
</style>
