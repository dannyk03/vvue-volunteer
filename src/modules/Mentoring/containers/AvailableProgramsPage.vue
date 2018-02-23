<template>
  <div class="vv-available-programs mt-4">
    <i18n path="mentoring.availablePrograms.title" tag="h1" class="display-1 heading">
      <span place="accent" class="accented" v-t="'mentoring.availablePrograms.title.accent'" />
    </i18n>
    <p class="page-subtitle mt-3 mb-5" v-t="'mentoring.availablePrograms.subtitle'" />
    <vv-available-program-list :list="programs" @choose="chooseProgram" />
  </div>
</template>

<script>
  import VvAvailableProgramList from '../components/AvailableProgramList';

  export default {
    name: 'AvailablePrograms',
    components: {
      VvAvailableProgramList,
    },
    data: () => ({
      programs: [ // todo: Hardcode
        {
          id: 1,
          image: 'https://i.pinimg.com/736x/0e/cc/1d/0ecc1d7e253ef79ef8df47f76a47c517.jpg',
          title: 'I need your help to learn German',
          name: 'eStart',
          description: 'Help a refugee learning German',
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&s=10f2e97699b156850d17285683b6ce81&dpr=1&auto=format&fit=crop&w=376&h=564&q=60&cs=tinysrgb',
          title: 'I want to start my career',
          name: 'eSister',
          description: 'Help a female student to improve her career',
        },
        {
          id: 3,
          image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/11/01/01-kevin-spacey-1.w710.h473.jpg',
          title: 'I want to start my career',
          name: 'eStudy',
          description: 'Help a male student to improve his career',
        },
      ],
    }),
    methods: {
      chooseProgram(program) {
        console.log('Choose program', program);
      },
    },
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/fonts';

  .vv-available-programs {
    .page-subtitle {
      @include pageSubtitleFont;
    }
  }
</style>
