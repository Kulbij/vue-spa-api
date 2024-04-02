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

<style src="vue-multiselect/dist/vue-multiselect.ssr.css"></style>