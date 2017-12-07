<template>
  <div>
    <h3>HomeContainer</h3>

    <h2>Add User:</h2>
    <form @submit.prevent="addNewUser">
      <vv-form-field label="Name">
        <vv-base-text-input slot="control" v-model="newUser.name" />
      </vv-form-field>

      <vv-form-field label="Age">
        <vv-base-text-input slot="control" v-model="newUser.age" />
      </vv-form-field>

      <button type="submit">Save User</button>
    </form>


    <!-- <button @click="add">Add user</button> -->
    <button style="margin-top: 20px" @click="fetchUsers">Fetch users</button>
    <h2>Users:</h2>
    <div v-if="loading">Loading...</div>
    <div v-for="user in users" :key="user.id" @click="fetchOne(user.id)">
      {{user.name}} - {{user.age}} years
      <span @click.stop="remove(user.id)">X</span>
    </div>

    <h2>Current User:</h2>
    <div v-if="currentUserLoading">Loading...</div>
    <div v-if="currentUser">
      <p>{{currentUser.name}}</p>
      <ul>
        <li>Age: {{currentUser.age}}</li>
        <li>Phone: {{currentUser.phone}}</li>
        <li>Email: {{currentUser.email}}</li>
      </ul>
    </div>

    <vv-home-component />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'; // eslint-disable-line
import VvFormField from '@/shared/components/FormField';
import VvBaseTextInput from '@/shared/components/BaseTextInput';
import VvHomeComponent from '../components/HomeComponent';

import { users } from '../store';

export default {
  name: 'HomeContainer',
  components: {
    VvHomeComponent,
    VvFormField,
    VvBaseTextInput,
  },
  data: () => ({
    newUser: {
      name: '',
      age: '',
    },
  }),
  computed: {
    ...mapGetters('home/users', {
      users: users.getters.list,
      loading: users.getters.listLoading,
      currentUser: users.getters.one,
      currentUserLoading: users.getters.oneLoading,
    }),
  },
  methods: {
    ...mapActions('home/users', {
      fetchUsers: users.actions.fetchList,
      fetchOne: users.actions.fetchOne,
      addUser: users.actions.post,
      remove: users.actions.delete,
    }),
    // ...mapMutations('home/users', {
    //   addUser: users.mutations.add,
    // }),
    addNewUser() {
      this.addUser({ ...this.newUser });
      this.newUser.name = '';
      this.newUser.age = '';
    },
  },
};
</script>
