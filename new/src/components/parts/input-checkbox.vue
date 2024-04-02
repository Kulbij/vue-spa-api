<template>
    <div class="main" :class="{ 'not-valid': value && !valid, valid: value && valid }">
        <div class="form-check mt-100">
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                :required="required"
                value="1"
                @input="update($event.target.checked)"
            >

            <label :for="id" v-text="label"></label>
        </div>

        
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        value: {
            type: Boolean,
            default: 0,
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
        },
        modelValue: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            customValue: false
        };
    },
    methods: {
        update(value) {
            this.$emit("update:modelValue", value ? 1 : 0);
        },
    },
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
</style>
