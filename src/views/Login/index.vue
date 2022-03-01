<template>
  <div>
    <login-page-left></login-page-left>
    <login-page-right></login-page-right>
  </div>
</template>

<script>
import loginPageLeft from '@/containers/login-page-left/index.vue';
import loginPageRight from '@/containers/login-page-right/index.vue';
export default {
  name: 'Login-page',
  components: {
    loginPageLeft,
    loginPageRight,
  },
};
</script>

<style lang="scss" scoped>
@import '@/views/Login/index.scss';
</style>
