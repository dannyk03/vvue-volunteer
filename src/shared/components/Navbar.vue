<template>
  <v-toolbar>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link :to="{ name: 'home' }">
        <v-btn flat>Home</v-btn>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <v-btn flat>About</v-btn>
      </router-link>
      <router-link :to="{ name: 'management' }">
        <v-btn flat>Management</v-btn>
      </router-link>
      <a href="/logout" @click.prevent="logout">
        <v-btn flat>Logout</v-btn>
      </a>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <vv-language-picker />
  </v-toolbar>

</template>

<script>
import VvLanguagePicker from '@/shared/components/LanguagePicker';
import { USER_LOGGED_OUT } from '@/shared/store/mutationTypes';

export default {
  name: 'Navbar',
  components: {
    VvLanguagePicker,
  },
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

<style lang="scss" scoped>
  .navbar-container {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
