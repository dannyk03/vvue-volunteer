<template>
  <div>
    <div>i18n: <span v-t="'hello'" /></div>

    HomePage
    <router-link :to="{ name: 'home-one' }">One</router-link>
    <router-link :to="{ name: 'home-second' }">Second</router-link>

    <router-view />
  </div>
</template>

<script>

import VvLoginContainer from '@/modules/Public/containers/LoginContainer';

export default {
  name: 'HomePage',
  components: {
    VvLoginContainer,
  },
};
</script>
