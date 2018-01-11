<template>
  <div class="pa-3">
    <div v-if="loading">Loading...</div>
    <div v-if="user">
      <h3 class="title">
        {{ displayableName }}
        <span v-if="!isEditing" @click="isEditing = true" class="caption">Edit</span>
      </h3>
      <vv-user-info class="mt-4" v-if="!isEditing" :user="user" />
      <vv-user-info-form v-else class="mt-4" :user="user" @save="updateUser" @cancel="isEditing = false" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import difference from '@/shared/utils/difference';
import notificationMixin from '@/shared/mixins/notificationMixin';
import VvUserInfo from '../components/UserInfo';
import VvUserInfoForm from '../components/UserInfoForm';

import { users } from '../store';

export default {
  name: 'UsersContainer',
  props: {
    id: String,
  },
  mixins: [notificationMixin],
  components: {
    VvUserInfo,
    VvUserInfoForm,
  },
  data: () => ({
    isEditing: false,
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
      update: users.actions.put,
    }),
    updateUser(user) {
      const { id } = this.user;
      const changes = difference(user, this.user);
      this.update(Object.assign(changes, { id }))
        .then(() => {
          this.notifySuccess('Changes successfully saved');
          this.isEditing = false;
        })
        .catch(() => this.notifyError('Error occured while saving changes'));
    },
  },
  mounted() {
    this.fetchUser(this.id);
  },
};
</script>
