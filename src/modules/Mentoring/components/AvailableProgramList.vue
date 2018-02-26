<template>
  <div class="vv-available-program-list">
    <vv-simple-program-card 
      :key="program.id" v-for="program in list" 
      :program="program" 
      @click.native="$emit('choose', program)"/>
  </div>
</template>

<script>
  import VvSimpleProgramCard from './SimpleProgramCard';

  export default {
    name: 'AvailableProgramList',
    components: {
      VvSimpleProgramCard,
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
