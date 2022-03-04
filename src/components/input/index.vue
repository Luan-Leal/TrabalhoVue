<template>
  <div id="form">
    <div class="form-1">
      <input
        type="ratio"
        class="input-login"
        placeholder="Usuário"
        id="user"
        name="username"
        v-model="a"
      />
      <i class="user-icon"
        ><img draggable="false" src="@/assets/user-icon.png" alt=""
      /></i>
    </div>
    <div class="form-2">
      <input
        type="password"
        class="input-login"
        name="password"
        id="senha"
        placeholder="Senha"
        :v-model="a"
      />
      <i
        ><img
          class="cadeado"
          draggable="false"
          src="@/assets/password-icon.png"
          alt=""
      /></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      user: 'a',
      password: 'a',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/components/input/index.scss';
</style>
