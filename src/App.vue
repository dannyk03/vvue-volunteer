<template>
  <div id="app">
    <router-view />
    <notifications group="main" position="bottom right" :speed="500" />
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
