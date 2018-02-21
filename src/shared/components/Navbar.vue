<template>
  <v-toolbar height="80">
    <div class="toolbar-wrapper">
      <vv-logo color="grey" />
      <v-toolbar-items class="hidden-sm-and-down">
        <vv-navbar-link to="dashboard">{{ $t('navbar.menu.items.dashboard') }}</vv-navbar-link>
        <vv-navbar-link to="mentoring">{{ $t('navbar.menu.items.mentoring') }}</vv-navbar-link>
        <vv-navbar-link to="community">{{ $t('navbar.menu.items.community') }}</vv-navbar-link>
        <vv-navbar-link to="supervisor">{{ $t('navbar.menu.items.supervisor') }}</vv-navbar-link>
      </v-toolbar-items>
      <vv-navbar-user-menu :user="user" />
    </div>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import VvLogo from '@/shared/components/Logo';
import VvNavbarLink from '@/shared/components/NavbarLink';
import VvNavbarUserMenu from '@/shared/components/NavbarUserMenu';
import { USER_LOGGED_OUT } from '@/shared/store/mutationTypes';

export default {
  name: 'Navbar',
  components: {
    VvLogo,
    VvNavbarLink,
    VvNavbarUserMenu,
  },
  computed: {
    ...mapGetters('global/user', {
      user: 'getUserMenu',
    }),
  },
  methods: {
    logout() {
      this.$store.commit(`global/auth/${USER_LOGGED_OUT}`);
      localStorage.clear();
      this.$router.push('/auth/login');
    },
  },
};
</script>

<style lang="scss" scoped>
  .toolbar {
    background-color: white;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.05);

    .toolbar-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 100px;
      margin: 0 !important;
    }
  }
</style>
