<template>
    <div class="main" :class="{ 'not-valid': value && !valid, valid: value && valid }">
        <div class="form-check mt-100">
            <input
                :id="id"
                type="checkbox"
                @click="update($event.target.value)"

                :value="value"
            >

            <label :for="id">
                label
            </label>
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
            default: false,
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
    },
    data() {
        return {
            customValue: false
        };
    },
    methods: {
        update(value) {
            this.value = 1;

            // this.$emit("update:value", 1);
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
