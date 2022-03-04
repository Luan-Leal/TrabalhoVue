<template>
  <div class="hora">
    <h1>
      <span id="hora">{{ dateTime.hours }}</span
      >:<span id="minutos">{{ dateTime.minutes }}</span>
    </h1>
    <p>
      <span id="diaSemana">{{ dateTime.day }} </span>,<span id="dia">{{
        dateTime.date
      }}</span>
      de <span id="mes">{{ dateTime.mouth }}</span> de
      <span id="ano">{{ dateTime.year }}</span>
    </p>
  </div>
</template>

<script>
const date = new Date();
export default {
  name: 'header-clock',
  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        date: date.getDate(),
        day: date.getDay(),
        mouth: date.getMonth(),
        year: date.getFullYear(),
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        date: date.getDate(),
        day: date.getDay(),
        mouth: date.getMonth(),
        year: date.getFullYear(),
      };
    },
  },

  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
@import '@/components/clock/index.scss';
</style>
