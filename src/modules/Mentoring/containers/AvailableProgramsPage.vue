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
  import { mapActions, mapGetters } from 'vuex';
  import VvAvailableProgramList from '../components/AvailableProgramList';
  import { programs } from "../store";

  export default {
    name: 'AvailablePrograms',
    components: {
      VvAvailableProgramList,
    },
    computed: {
      ...mapGetters('mentoring/programs', {
        programs: programs.getters.list,
      }),
    },
    methods: {
      ...mapActions('mentoring/programs', {
        fetchPrograms: programs.actions.fetchList,
      }),
      chooseProgram({ id }) {
        this.$router.push({ name: 'programDetails', params: { id } });
      },
    },
    mounted() {
      this.fetchPrograms();
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
