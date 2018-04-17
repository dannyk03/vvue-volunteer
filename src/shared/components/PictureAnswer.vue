<template>
  <div>
    <div class='picture-title' v-html='title'></div>

    <!-- Radio -->
    <div v-if='type === "answers"'>
      <div v-for='(radio, index) in data' :key='"for_test" + index'>
        <vv-radio-card-wrap :data='radio'></vv-radio-card-wrap>
      </div>
    </div>

    <!-- Hobbies -->
    <v-container v-if='type === "hobbies"'>
      <v-layout wrap justify-space-between>
        <v-flex justify-end v-for='(hobby, index) in data' :key="'hobby' + index">
          <vv-checkbox-card :data='hobby'></vv-checkbox-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>
<script>
  import VvRadioCardWrap from '@/shared/components/RadioCardWrap';
  import VvCheckboxCard from '@/shared/components/CheckboxCard';


  export default {
    props: {
      type: null,
      url: null,
    },
    components: {
      VvRadioCardWrap,
      VvCheckboxCard,
    },
    data() {
      return {
        data: null,
        title: '',
      };
    },
    watch: {
      $route: 'fetchData',
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$http.get(`http://localhost:8080/static/data/${this.url}.json`)
          .then((response) => {
            // console.log(response.data.data);
            this.title = response.data.title;
            this.data = response.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .picture {
    &-title {
      margin-bottom: 35px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      text-align: center;
      color: $primaryDark;
    }
  }
</style>


