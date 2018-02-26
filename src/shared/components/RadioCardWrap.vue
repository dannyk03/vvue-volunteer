<template>
  <v-layout class='radio-wrap' justify-center="true">
    <vv-radio-card :data='data.radioOne' :name='data.radioName'></vv-radio-card>
    <div class='radio-text'>or</div>
    <vv-radio-card :data='data.radioTwo' :name='data.radioName'></vv-radio-card>
  </v-layout>
</template>
<script>
  import VvRadioCard from '@/shared/components/RadioCard';

  export default {
    props: ['data'],
    components: {
      VvRadioCard,
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .radio {
    &-wrap {
      margin-bottom: 50px;
    }

    &-text {
      display: flex;
      align-items: center;
      margin: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-align: center;
      text-transform: uppercase;
      color: $primaryGrey;
    }
  }
</style>


