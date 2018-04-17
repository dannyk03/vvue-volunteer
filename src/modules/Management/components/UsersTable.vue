<template>
  <v-data-table
      :headers="headers"
      :items="data"
      hide-actions
      class="elevation-1 users-table"
    >
    <template slot="items" slot-scope="props">
      <tr @click="$emit('pick', props.item.id)" class="row">
        <td class="text-xs-right">{{ props.item.firstName }}</td>
        <td class="text-xs-right">{{ props.item.lastName }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.city }}</td>
        <td class="text-xs-right">{{ props.item.phonenumber }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'UsersTable',
  props: {
    data: Array,
  },
  data: () => ({
    headers: [
      {
        text: 'First Name',
        sortable: true,
        value: 'firstName',
      },
      { text: 'Last Name', value: 'lastName' },
      { text: 'Email', value: 'email' },
      { text: 'City', value: 'city' },
      { text: 'Phone Number', value: 'phonenumber' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .users-table {
    .row {
      cursor: pointer;
    }
  }
</style>
