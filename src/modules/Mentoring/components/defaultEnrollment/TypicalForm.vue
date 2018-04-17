<template>
  <div class='vv-typical-form'>
    <div class='title' v-html='title'></div>

    <div class='form'>
      <v-select
        :items="items"
        label="Having an educationl background in"
        single-line
        bottom
      ></v-select>
      <v-text-field
        name="input-1"
        label="And a professional background in"
      ></v-text-field>
      <v-text-field
        name="input-2"
        label="I arrive at"
      ></v-text-field>
    </div>  
  </div>
</template>
<script>
  export default {
    name: 'TypicalForm',
    data() {
      return {
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
        ],
        title: 'Starting the day',
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .title {
    margin-bottom: 35px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    color: $primaryDark;
  }

  .form {
    max-width: 370px;
    margin: 0 auto;
  }
</style>


