<template>
  <div class="main" :class="{ 'not-valid': value && !valid, valid: value && valid }">
    <div class="input-box">
        <label v-if="label" for="multiselect"><span></span>{{ label }}</label>
         <multiselect
            
            :value="value"
            v-model="selected"

            :options="options"

            :multiple="true"
            :close-on-select="true"
            :searchable="true"
            :placeholder="placeholder"
            label="name"
            track-by="id"
            :key="id"

            @update:model-value="updateSelected"
        ></multiselect>

        <slot></slot>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    components: {
        Multiselect
    },
    props: {
        modelValue: {
            type: Array,
            default: [],
        },
        options: {
            type: Array,
            default: [],
        },
        selected: {
            type: Array,
            default: [
                
            ],
        },

        emptyOption: {
            type: String,
            default: 'Select category',
        },
        label: {
            type: String
        },
        value: {
            type: [String, Number],
            default: '0',
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

        multiple: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: 'Select options',
        },
    },
    computed: {
        selecteds: function () {
            let selectedOptions = []

            this.options.forEach((option, key) => {
                if (this.selected.indexOf(option.id) >= 0) {
                    selectedOptions.push(option)
                }
            })

            return selectedOptions
        },
    },
    methods: {
        updateSelected(value) {
            value.forEach((option) => {
                if (this.modelValue.indexOf(option.id) < 0) {
                    this.modelValue.push(option.id)
                }
            })
        },
        updateModelValue() {
            let selectedOptions = []

            this.options.forEach((option, key) => {
                if (this.selected.indexOf(option.id) >= 0) {
                    selectedOptions.push(option)
                }
            })

            return selectedOptions
        },

    },
    mounted() {
        this.updateModelValue()
    },
    async created() {
        
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
