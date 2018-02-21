<template>
<div>
  <v-container>
    <v-layout wrap justify-space-between>
      <v-flex justify-end v-for='(hobby, index) in hobbies' :key="'hobby' + index">
        <vv-checkbox :data='hobby'></vv-checkbox>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
  import VvCheckbox from '../components/Checkbox';
  
  export default {
    props: ['hobbies'],
    components: {
      VvCheckbox,
    },
  };
</script>
<style lang="scss" scoped>

</style>


