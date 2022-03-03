<template>
  <div class="welcome">
    <h1>{{ hello }}</h1>
    <p>{{ warning }}</p>
    <h2>{{ LoginTitle }}</h2>
    <login-input />
    <div class="login-erro">
      <span v-if="senhaCorreta" class="login-true">{{ text }}</span>
      <span v-else class="login-false">{{ text }}</span>
    </div>
    <div class="botao-login">
      <button @click="Login">
        <router-link class="button" to="/home">Continuar</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import loginInput from '@/components/input/index.vue';
export default {
  name: 'login-page-left',
  data() {
    return {
      hello: 'Olá,',
      warning:
        'Para continuar navegando de forma segura, efetue o login na rede.',
      loginTitle: 'Login',
      senhaCorreta: true,
    };
  },
  components: {
    loginInput,
  },
  props: {
    text: {
      type: String,
      default: 'Ops, usuario ou senha inválidos. Tente novamente!',
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/containers/login-page-left/index.scss';
</style>
