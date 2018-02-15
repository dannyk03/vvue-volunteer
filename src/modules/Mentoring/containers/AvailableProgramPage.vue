<template>
  <div class="vv-available-program" v-if="program">

      <div class="main">
        <i18n path="mentoring.availableProgram.title" tag="h1" class="display-1 heading">
          <span place="accent" class="accented" v-t="'mentoring.availableProgram.title.accent'" />
        </i18n>
        <p class="mt-4 text">{{program.description}}</p>

        <div class="actions">
          <vv-base-button
            color="accent"
            class="mr-3"
          >
            Participate as mentor
          </vv-base-button>

          <vv-base-button
            color="accent"
            outline
          >
            Participate as mentee
          </vv-base-button>
        </div>

      </div>
      <div class="image" :style="{ 'background-image': 'url(http://www.zastavki.com/pictures/originals/2015/Girls_Smiling_beautiful_girl__photo_George_Chernyad_ev_111193_.jpg' }">
        <div class="image-text">
          <div class="fontAccented code">{{program.code}}</div>
          <div class="description">{{program.title}}</div>
        </div>
      </div>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import VvBaseButton from '@/shared/components/BaseButton';
  import { programs } from "../store";

  export default {
    name: 'AvailableProgramPage',
    components: {
      VvBaseButton,
    },
    props: {
      id: String,
    },
    computed: {
      ...mapGetters('mentoring/programs', {
        program: programs.getters.one,
      }),
    },
    methods: {
      ...mapActions('mentoring/programs', {
        fetchProgram: programs.actions.fetchOne,
      }),
      chooseProgram(program) {
        console.log('Choose program', program);
      },
    },
    mounted() {
      this.fetchProgram(this.id);
    },
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/fonts';

  .vv-available-program {
    display: grid;
    margin: -30px -100px;
    height: calc(100% + 60px);
    grid-template-columns: 1fr 520px;
    grid-gap: 160px;
    grid-template-rows: 1fr;
    grid-template-areas:
      'main image';


    .main {
      grid-area: main;
      padding: 30px 0 0 100px;

      .text {
        @include greyBodyFont;
      }

      .actions {
        margin-top: 50px;
      }
    }

    .image {
      grid-area: image;
      background-position: center center;
      background-size: cover;
      color: white;
      position: relative;

      .image-text {
        position: absolute;
        bottom: 50px;
        left: 50px;

        .code {
          font-size: 38px;
        }

        .description {
          font-size: 16px;
        }
      }
    }
  }
</style>
