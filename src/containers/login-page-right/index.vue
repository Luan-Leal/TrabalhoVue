<template>
  <div class="login-right">
    <img
      src="@/assets/compassuol-logo-white.png"
      :alt="descricao"
      draggable="false"
    />
  </div>
</template>

<script>
export default {
  name: 'login-right',
  data() {
    return {
      logo: '@/assets/compassuol-logo-white.png',
      descricao: 'Logo compass white',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/containers/Login-page-right/index.scss';
</style>
