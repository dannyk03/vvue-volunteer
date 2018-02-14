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
          image: 'https://photos-5.dropbox.com/t/2/AAA9l_9lgSAum9RnM3Zk5Hvd6JDUT5WaTQvpbf_rBUpltw/12/663441405/jpeg/32x32/3/1518202800/0/2/photo-1438761681033-6461ffad8d80.jpg/EP2Pv8wEGJ74HCAHKAc/iL-wWnxEJCN8zil-_BPhZFP-TXwe0if8QsMeqmbZxz0?dl=0&size=1280x960&size_mode=3',
          title: 'I need your help to learn German',
          name: 'eStart',
          description: 'Help a refugee learning German',
        },
        {
          id: 2,
          image: 'https://photos-5.dropbox.com/t/2/AAA9l_9lgSAum9RnM3Zk5Hvd6JDUT5WaTQvpbf_rBUpltw/12/663441405/jpeg/32x32/3/1518202800/0/2/photo-1438761681033-6461ffad8d80.jpg/EP2Pv8wEGJ74HCAHKAc/iL-wWnxEJCN8zil-_BPhZFP-TXwe0if8QsMeqmbZxz0?dl=0&size=1280x960&size_mode=3',
          title: 'I want to start my career',
          name: 'eSister',
          description: 'Help a female student to improve her career',
        },
        {
          id: 3,
          image: 'https://photos-5.dropbox.com/t/2/AAA9l_9lgSAum9RnM3Zk5Hvd6JDUT5WaTQvpbf_rBUpltw/12/663441405/jpeg/32x32/3/1518202800/0/2/photo-1438761681033-6461ffad8d80.jpg/EP2Pv8wEGJ74HCAHKAc/iL-wWnxEJCN8zil-_BPhZFP-TXwe0if8QsMeqmbZxz0?dl=0&size=1280x960&size_mode=3',
          title: 'I want to start my career',
          name: 'eStudy',
          description: 'Help a male student to improve his career',
        },
      ],
    }),
    methods: {
      chooseProgram(program) {
        console.log('Choose program', program);
      }
    }
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
