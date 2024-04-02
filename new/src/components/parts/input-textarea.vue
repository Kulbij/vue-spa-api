<template>
  <div class="main" :class="{ 'not-valid': value && !valid, valid: value && valid }">
    <div class="input-box">
        <span
            v-if="label"
            class="label m-text-food-title"
        >{{ label }}</span>

        <textarea
            @blur="blurInput"
            class="input m-text-des"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            :id="id"
            :autocomplete="autocomplete"
        ></textarea>

        <slot></slot>
    </div>

    <span
        v-if="value && !valid"
        class="valid-error s-text-caption"
    >{{ errorText }}</span>
  </div>
</template>

<script>
export default {
    props: {
        autocomplete: {
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String
        },
        label: {
            type: String
        },
        value: {
            type: [String, Number]
        },
        id: {
            type: String
        },
        errorText: {
            type: String,
            default: "Valid error"
        },
        valid: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        blurInput() {
            this.$emit("blurInput");
        },
        mouseOut(event) {
            event.target.blur();
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  min-width: 325px;
  padding: 10px;
  margin-top: 18px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    min-width: auto;
    margin-top: 30px;
  }
}
.input-box {
  width: 100%;
  transition: all 0.2s;
  padding-right: 16px;
  display: flex;
  align-items: flex-end;
  position: relative;
  border: 1px solid var(--dark-10);
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.input {
  width: 100%;
  padding: 13px 0 13px 15px;
  border: none;
  outline: none;
  border-radius: 8px;
  &::placeholder {
    color: var(--dark-40);
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
}
.label {
  top: 50%;
  left: 11px;
  transform: translateY(-50%);
  position: absolute;
  color: var(--dark-40);
  padding: 0 4px;
  background: var(--white-100);
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
}
.valid-error {
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  width: 100%;
  max-width: 325px;
  color: var(--error);
  font-size: 11px;
}
.input-box:focus-within {
  border-color: var(--blue-main);
  .label {
    color: var(--blue-main);
    font-size: 12px;
    top: -11px;
    transform: none;
  }
}
input:hover::placeholder {
  opacity: 0;
}
.valid .label,
.not-valid .label {
  font-size: 12px;
  top: -11px;
  transform: none;
}
.main.not-valid {
  .input-box {
    border-color: var(--error);
  }
  .label {
    color: var(--error);
  }
}
</style>
