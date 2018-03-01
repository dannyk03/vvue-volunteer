<template>
  <div class='content-wrapper'>
    <div class='vv-current-programs'>
      <v-layout class='header' justify-space-between align-center>
        <h1 class='display-1 heading'>Current <span class='accented'>Programs</span></h1>
        <v-select
          v-if='!programsEmpty'
          class='current-programs-select'
          :items='selectOptions'
          v-model="selected"
          content-class='current-programs-menu'
          bottom>
        </v-select>
      </v-layout>

      <!-- TODO: show something when Data loading, for example Skeleton UI -->
      <div v-if='loadData' class='display-1 heading'>Load data</div>

      <div v-if='programsEmpty'>
        <v-layout align-center="true" column="true" >
          <div class="icon">
            <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="199"><g fill="#E0E0E0" fill-rule="evenodd"><path fill-rule="nonzero" d="M112.09 144.266a6.5 6.5 0 0 1 1.547 1.148l4.337 4.352 2.451 2.458a8.862 8.862 0 0 1 6.04 2.612l28.628 28.718c3.477 3.488 3.475 9.148 0 12.635a8.89 8.89 0 0 1-12.597 0l-28.628-28.718a8.916 8.916 0 0 1-2.604-6.057l-2.45-2.459-4.338-4.351a6.519 6.519 0 0 1-1.146-1.551c-24.81 20.472-61.54 19.078-84.726-4.181-24.665-24.742-24.665-64.856 0-89.598 24.664-24.742 64.654-24.742 89.318 0 23.187 23.26 24.577 60.104 4.168 84.992zm5.213 19.76l28.629 28.717a4.042 4.042 0 0 0 5.725 0 4.073 4.073 0 0 0 0-5.743l-28.628-28.718a4.042 4.042 0 0 0-5.725 0 4.073 4.073 0 0 0 0 5.743zm-12.816-18.6c22.768-22.839 22.768-59.867 0-82.706-22.767-22.838-59.68-22.838-82.448 0-22.767 22.839-22.767 59.867 0 82.706 22.767 22.838 59.68 22.838 82.448 0zm-6.298-6.318c-19.289 19.35-50.563 19.35-69.852 0s-19.289-50.72 0-70.07c19.29-19.35 50.563-19.35 69.852 0 19.29 19.35 19.29 50.72 0 70.07zm-3.435-3.446c17.391-17.446 17.391-45.732 0-63.178-17.392-17.446-45.59-17.446-62.981 0-17.392 17.446-17.392 45.732 0 63.178 17.391 17.446 45.589 17.446 62.98 0zm13.157 15.496l4.338 4.351 2.29-2.297-4.338-4.352a1.62 1.62 0 1 0-2.29 2.298zm-44.753-16.325c16.993 0 30.77-13.82 30.77-30.866a2.433 2.433 0 0 1 2.428-2.436 2.433 2.433 0 0 1 2.43 2.436c0 19.738-15.952 35.74-35.628 35.74a2.433 2.433 0 0 1-2.43-2.438 2.433 2.433 0 0 1 2.43-2.436zm85.02-27.617a3.244 3.244 0 0 0 3.239-3.249 3.244 3.244 0 0 0-3.239-3.249 3.244 3.244 0 0 0-3.239 3.25 3.244 3.244 0 0 0 3.24 3.248zm14.575 0a3.244 3.244 0 0 0 3.239-3.249 3.244 3.244 0 0 0-3.239-3.249 3.244 3.244 0 0 0-3.239 3.25 3.244 3.244 0 0 0 3.239 3.248zm14.575 0a3.244 3.244 0 0 1-3.239-3.249 3.244 3.244 0 0 1 3.239-3.249 3.244 3.244 0 0 1 3.239 3.25 3.244 3.244 0 0 1-3.24 3.248zm-57.162 65.425a2.441 2.441 0 0 1-.003-3.443l8.023-8.047a2.423 2.423 0 0 1 3.432.003c.948.952.948 2.494.003 3.443l-8.023 8.047a2.423 2.423 0 0 1-3.432-.003z"/><path d="M160.554 64.98h7.065C185.502 64.98 200 50.433 200 32.49 200 14.542 185.503 0 167.619 0h-30.785c-17.882 0-32.38 14.546-32.38 32.49 0 17.947 14.497 32.49 32.38 32.49h7.065l4.893 4.907a4.847 4.847 0 0 0 6.87 0l4.892-4.907zM124.38 43.975c-6.3-.304-9.64-3.807-10.02-10.508.455-6.625 3.795-10.204 10.02-10.737 6.149.533 9.489 4.112 10.02 10.737-.455 6.701-3.795 10.204-10.02 10.508zm18.56-15.99c4.555.456 7.06 3.16 7.515 8.11-.38 5.025-2.884 7.652-7.515 7.88-4.706-.228-7.211-2.855-7.515-7.88.38-4.95 2.885-7.654 7.515-8.11zm9.223 19.646V30.497c0-1.447.722-2.246 2.164-2.398 1.139.076 1.822.685 2.05 1.827.759-1.218 2.087-1.865 3.985-1.942 4.175.305 6.452 3.084 6.832 8.339-.456 4.873-2.77 7.424-6.946 7.652-1.594-.076-2.885-.495-3.871-1.256v4.912c-.076 1.523-.76 2.322-2.05 2.398-1.442-.152-2.164-.952-2.164-2.398zm27.215-16.677c-.152 1.219-.722 1.866-1.708 1.942-.304.076-.798-.076-1.48-.457-1.063-.457-1.823-.723-2.278-.8-.987.077-1.48.457-1.48 1.143 0 .533.797 1.104 2.39 1.713 3.265 1.295 4.897 2.894 4.897 4.797-.304 3.046-2.277 4.607-5.92 4.683-3.569-.228-5.504-1.218-5.808-2.97.152-1.142.721-1.789 1.708-1.941.531 0 1.177.266 1.936.8.91.456 1.746.685 2.505.685 1.062.076 1.594-.343 1.594-1.257 0-.457-.835-.99-2.505-1.599-3.189-1.218-4.783-2.817-4.783-4.797.152-3.046 2.05-4.683 5.694-4.912 3.264.305 5.01 1.295 5.238 2.97zm3.416 5.026V24.672c0-1.218.72-1.866 2.163-1.942 1.215.152 1.898.8 2.05 1.942V35.98c-.152 1.218-.835 1.866-2.05 1.942-1.366-.076-2.088-.724-2.163-1.942zm2.163 7.995c-1.442-.076-2.201-.761-2.277-2.056.076-1.37.835-2.132 2.277-2.284 1.366.152 2.125.914 2.277 2.284-.152 1.295-.91 1.98-2.277 2.056zm-28.58-7.995c.151 2.817 1.252 4.264 3.302 4.34 1.973-.152 3.074-1.56 3.302-4.226-.228-2.589-1.329-3.998-3.302-4.226-2.05.152-3.15 1.523-3.302 4.112zm-13.437-4.112c-2.05.152-3.15 1.56-3.302 4.226.152 2.741 1.253 4.15 3.302 4.226 1.974-.076 3.075-1.485 3.302-4.226-.227-2.665-1.328-4.074-3.302-4.226zm-18.56 8.338c3.492-.152 5.352-2.399 5.58-6.739-.304-4.264-2.164-6.51-5.58-6.74-3.492.23-5.314 2.476-5.466 6.74.152 4.34 1.974 6.587 5.466 6.74z"/></g></svg>
          </div>
          <div class="description fontAccented" >
            You did not enroll to any programms yet.
            <br>
            Go ahead and use that + button
          </div>
        </v-layout>
      </div>

      <vv-current-programs-list v-else :programs='programs'></vv-current-programs-list>

    </div>
    <router-link :to='{ name: "programs-avalible" }'>
      <v-fab-transition>
        <v-btn class='btn-fab' color="primary" absolute right bottom fab>
          <svg class='svg-icon' fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </v-btn>
      </v-fab-transition>
    </router-link>
  </div>
</template>
<script>
  /* eslint-disable */


  import axios from 'axios';
  import { fetchPrograms } from '@/api';

  import VvCurrentProgramsList from '../components/currentPrograms/CurrentProgramsList';


  export default {
    name: 'CurrentPrograms',
    components: {
      VvCurrentProgramsList,
    },
    data() {
      return {
        loadData: true,
        programsEmpty: false,
        selected: 'All',
        selectOptions: ['All', 'Active', 'Completed'],
        programs: [],
      };
    },
    created() {
      axios.get('http://localhost:8080/static/data/p2-1.json')
        .then((response) => {
          this.programs = response.data.data;

          if (this.programs.length === 0) {
            this.programsEmpty = true;
          }
          this.loadData = false;
        })
        .catch((error) => console.log(error));

      // fetchPrograms()
      //   .then((response) => {
      //     this.programs = response;

      //     if (this.programs.length === 0) {
      //       this.programsEmpty = true;
      //     }
      //     this.loadData = false;
      //     console.log(this.programs);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .vv-current-programs {
    height: 100%;
    position: relative;
    padding-top: 10px;
  }

  .header {
    margin-bottom: 70px;
  }

  .icon {
    margin-bottom: 48px;
  }

  .description {
     font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
    text-align: center;
    color: $tertiaryGrey;
  }

  .btn-fab {
    bottom: 40px;
    right: 40px;
  }
</style>


