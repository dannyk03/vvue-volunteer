<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  beforeMount() {
    this.$store.dispatch('global/auth/checkAuthentication')
      .then(() => this.$router.push('/home'))
      .catch(() => this.$router.push('/auth/login'));
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
