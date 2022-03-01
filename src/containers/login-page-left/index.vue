<template>
  <div class="welcome">
    <h1>Olá,</h1>
    <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
    <h2>Login</h2>
    <login-input />
    <div class="login-erro">
      <span>{{ text }}</span>
    </div>
    <div class="botao-login">
      <button>Continuar</button>
    </div>
  </div>
</template>

<script>
import loginInput from '@/components/input/index.vue';
export default {
  name: 'login-page-left',
  components: {
    loginInput,
  },
  props: {
    text: {
      type: String,
      default: 'Ops, usuario ou senha inválidos. Tente novamente!',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/containers/login-page-left/index.scss';
</style>
