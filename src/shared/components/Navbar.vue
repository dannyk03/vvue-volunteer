<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'management' }">Management</router-link>
    <a href="/logout" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
import { USER_LOGGED_OUT } from '@/shared/store/mutationTypes';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      // emulate logout
      this.$store.commit(`global/auth/${USER_LOGGED_OUT}`);
      localStorage.clear();
      this.$router.push('/auth/login');
    },
  },
};
</script>
