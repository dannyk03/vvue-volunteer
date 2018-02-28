<template>
  <div class="vv-available-program-list">
    <vv-available-card 
      v-for="program in list" 
      :key="program.id"
      :program="program" 
      @click.native="$emit('choose', program)"/>
  </div>
</template>

<script>
  import VvAvailableCard from './AvailableCard';

  export default {
    name: 'AvailableProgramList',
    components: {
      VvAvailableCard,
    },
    props: {
      list: Array,
    },
    data: () => ({

    }),
  };
</script>

<style lang="scss" scoped>

  .vv-available-program-list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 250px);
  }
</style>
