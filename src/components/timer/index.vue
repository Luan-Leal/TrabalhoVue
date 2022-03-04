<template>
  <div class="timer">
    <h1 id="timer">{{ timerCount }}</h1>
    <h6>segundos</h6>
  </div>
</template>

<script>
export default {
  name: 'home-timer',
  data() {
    return {
      timerEnabled: true,
      timerCount: 600,
    };
  },

  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },

    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },

  methods: {
    play() {
      this.timerEnabled = true;
    },

    pause() {
      this.timerEnabled = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/components/timer/index.scss';
</style>
