<template>
  <section>
    <home-header />
    <home-main />
    <home-footer />
  </section>
</template>

<script>
import homeHeader from '@/containers/Header/index.vue';
import homeMain from '@/containers/Main/index.vue';
import homeFooter from '@/containers/Footer/index.vue';
export default {
  name: 'home-page',
  components: {
    homeHeader,
    homeMain,
    homeFooter,
  },
};
</script>
<style lang="scss" scoped>
@import '@/views/Home/index.scss';
</style>
