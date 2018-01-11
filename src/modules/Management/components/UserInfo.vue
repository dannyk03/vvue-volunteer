<template>
  <div class="user-info">
    <section class="mt2">
      <img src="" alt="No avatar" />
    </section>
    <!-- TODO: move to own components -->
    <div><span v-t="'user.fields.state'" />: {{ user.state }}</div>
    <div><span v-t="'user.fields.email'" />: {{ user.email }}</div>
    <div><span v-t="'user.fields.gender'" />: {{ user.gender }}</div>
    <div><span v-t="'user.fields.birthday'" />: {{ user.birthday }}</div>
    <div><span v-t="'user.fields.city'" />: {{ user.city }}</div>
    <div><span v-t="'user.fields.postcode'" />: {{ user.postcode }}</div>
    <div><span v-t="'user.fields.country'" />: {{ user.country }}</div>
    <div><span v-t="'user.fields.timezone'" />: {{ user.timezone }}</div>
    <div><span v-t="'user.fields.language'" />: {{ user.language }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: Object,
  },
  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>
  .user-info {
    width: 400px;
    display: flex;
    flex-direction: column;

    section {
      align-self: center;
      text-align: center;
      border: 1px solid grey;
      width: 150px;
      height: 150px;
    }

    & > div {
      padding: 0.5rem 0;
      border-bottom: 1px solid grey;

      & > span {
        font-weight: 600;
      }
    }
  }
</style>
