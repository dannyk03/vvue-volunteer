<template>
  <div>
    <h3>Users</h3>
    <div v-if="loading">Loading...</div>
    <vv-users-table v-if="users" :data="users" @pick="openUserDetails" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VvUsersTable from '../components/UsersTable';

import { users } from '../store';

export default {
  name: 'UsersContainer',
  components: {
    VvUsersTable,
  },
  data: () => ({

  }),
  computed: {
    ...mapGetters('management/users', {
      users: users.getters.list,
      loading: users.getters.listLoading,
    }),
  },
  methods: {
    ...mapActions('management/users', {
      fetchUsers: users.actions.fetchList,
    }),
    openUserDetails(id) {
      this.$router.push({ name: 'userDetails', params: { id } });
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
