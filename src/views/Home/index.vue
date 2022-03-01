<template>
  <home-header />
</template>

<script>
import homeHeader from '@/containers/Header/index.vue';
export default {
  name: 'home-page',
  components: {
    homeHeader,
  },
};
</script>
<style lang="scss" scoped>
@import '@/views/Home/index.scss';
</style>
