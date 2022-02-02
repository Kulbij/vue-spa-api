<template>
  <div>
    <div v-if="type == 'password'" class="eye-on" @click="() => $emit('update:type', 'text')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
        <path d="M20 12C17.8664 16.0003 15.2 18 12 18C8.8 18 6.1336 16.0003 4 12C6.1336 7.99971 8.8 6 12 6C15.2 6 17.8664 7.99971 20 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div v-if="type == 'text'" class="eye-off" @click="() => $emit('update:type', 'password')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
        <path d="M5 5L19 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 12C17.8664 16.0003 15.2 18 12 18C8.8 18 6.1336 16.0003 4 12C6.1336 7.99971 8.8 6 12 6C15.2 6 17.8664 7.99971 20 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "password"
        }
    }
};
</script>

<style lang="scss" scoped>
.eye-on,
.eye-off {
  cursor: pointer;
}
</style>
