<template>
  <div>
    <h3>HomeContainer</h3>

    <button @click="add">Add user</button>
    <button @click="fetchUsers">Fetch users</button>
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
import VvHomeComponent from '../components/HomeComponent';
import { users } from '../mutationTypes';

export default {
  name: 'HomeContainer',
  components: {
    VvHomeComponent,
  },
  computed: {
    ...mapGetters('home/users', {
      users: users.getters.all,
      loading: users.getters.allLoading,
      currentUser: users.getters.one,
      currentUserLoading: users.getters.oneLoading,
    }),
  },
  methods: {
    ...mapActions('home/users', {
      fetchUsers: users.actions.fetch,
      fetchOrders: users.actions.fetch,
      fetchOne: users.actions.fetchOne,
      remove: users.actions.delete,
    }),
    ...mapMutations('home/users', {
      addUser: users.mutations.add,
    }),
    add() {
      this.addUser({
        name: 'Paul Viskovich',
        age: 41,
      });
    },
  },
};
</script>
