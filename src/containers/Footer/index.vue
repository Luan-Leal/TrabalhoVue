<template>
  <section class="footer">
    <div class="mensagem">
      <p>
        Essa janela do navegador é usada para manter sua sessão de autenticação
        ativa. Deixe-a aberta em segundo plano e abra uma nova janela para
        continuar a navegar.
      </p>
    </div>
    <div class="cronometro">
      <p>Application refresh in</p>
      <div class="timer">
        <h1 id="timer">600</h1>
        <h6>segundos</h6>
      </div>
    </div>
    <div class="login">
      <div class="continuar">
        <button>continuar navegando</button>
      </div>
      <div class="logout">
        <button><a href="./index.html">Logout</a></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home-footer',
};
</script>

<style lang="scss" scoped>
@import '@/containers/Footer/index.scss';
</style>
