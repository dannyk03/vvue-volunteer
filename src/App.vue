<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>i18n: {{ $t("hello") }}</div>
    <div>i18n: <span v-t="'hello'" /></div>
    <vv-language-picker />
    <vv-navbar />
    <router-view/>
  </div>
</template>

<script>
import VvNavbar from '@/shared/components/Navbar';
import VvLanguagePicker from '@/shared/components/LanguagePicker';

export default {
  name: 'app',
  components: {
    VvNavbar,
    VvLanguagePicker,
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
  margin-top: 60px;
}
</style>
