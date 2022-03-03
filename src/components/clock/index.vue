<template>
  <div class="hora">
    <h1>
      <span id="hora">{{ dateTime.hours }}</span
      >:<span id="minutos">{{ dateTime.minutes }}</span>
    </h1>
    <p>
      <span id="diaSemana"> {{ day }} </span>,<span id="dia"></span> de
      <span id="mes"></span> de
      <span id="ano"></span>
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
        seconds: date.getSeconds(),
        day: date.getDay(),
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
        seconds: date.getSeconds(),
        day: date.getDay(),
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

let hoje = new Date();
let data_formatada = hoje.toLocaleDateString('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

console.log(data_formatada);
</script>

<style lang="scss" scoped>
@import '@/components/clock/index.scss';
</style>
