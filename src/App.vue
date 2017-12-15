<template>
  <div id="app">
    <v-app>
      <router-view />
      <notifications group="main" position="bottom right" :speed="500" />
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">
@import 'vuetify/dist/vuetify.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
