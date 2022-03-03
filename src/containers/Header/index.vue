<template>
  <section>
    <img
      draggable="false"
      src="@/assets/compassuol-logo-min.png"
      alt="Compass logo black"
    />
    <header-clock> </header-clock>
    <header-weather> </header-weather>
  </section>
</template>

<script>
import headerClock from '@/components/clock/index.vue';
import headerWeather from '@/components/weather/index.vue';
export default {
  name: 'home-header',
  components: {
    headerClock,
    headerWeather,
  },
};
</script>
<style lang="scss" scoped>
@import '@/containers/Header/index.scss';
</style>
