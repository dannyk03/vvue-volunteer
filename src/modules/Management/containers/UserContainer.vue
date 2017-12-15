<template>
  <div class="pa3">
    <div v-if="loading">Loading...</div>
    <div v-if="user">
      <h3>{{ displayableName }}</h3>
      <vv-user-info :user="user" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VvUserInfo from '../components/UserInfo';

import { users } from '../store';

export default {
  name: 'UsersContainer',
  props: {
    id: String,
  },
  components: {
    VvUserInfo,
  },
  data: () => ({

  }),
  computed: {
    ...mapGetters('management/users', {
      user: users.getters.one,
      loading: users.getters.oneLoading,
    }),
    displayableName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    ...mapActions('management/users', {
      fetchUser: users.actions.fetchOne,
    }),
  },
  mounted() {
    this.fetchUser(this.id);
  },
};
</script>
