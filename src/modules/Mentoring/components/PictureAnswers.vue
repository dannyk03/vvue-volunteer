<template>
  <div class='radio-wrap'>
    <vv-radio :data='data.radio_one' :name='data.radio_name'></vv-radio>
    <div class='radio-text'>or</div>
    <vv-radio :data='data.radio_two' :name='data.radio_name'></vv-radio>
  </div>
</template>
<script>
  import VvRadio from '../components/Radio';

  export default {
    props: ['data'],
    components: {
      VvRadio,
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .radio {
    &-wrap {
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      // align-items: stretch;
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


