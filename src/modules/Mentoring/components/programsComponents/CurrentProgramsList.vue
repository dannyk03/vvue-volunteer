<template>
  <div class='vv-current-program-list'>
    <vv-current-program-card 
      v-for="program in programs" 
      :key="program.id" 
      :program="program">
    </vv-current-program-card>
  </div>  
</template>
<script>
  import VvCurrentProgramCard from './CurrentProgramCard';

  export default {
    props: ['programs'],
    name: 'CurrentProgramsList',
    components: {
      VvCurrentProgramCard,
    },
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .vv-current-program-list {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 350px);
  }
</style>


