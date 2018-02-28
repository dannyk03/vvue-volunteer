<template>
  <div>
    <h1 class='mentoring-title heading'>my <span class='accented'>availability</span></h1>
    <p class='start-subtitle page-subtitle'>Please set appropriate weekdays and time <br> for you to make appointments.</p>
    <vv-availability-calendar></vv-availability-calendar>

    <!-- TODO: refactoring this -->
    <div class='bottom'>
      <vv-back-button way='typicalDefault' />

      <button class='mentoring-nav-next' @click='goToNext'>
        <span>Next</span>
        <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M0 0h16v16H0z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#417505" fill-opacity="0" xlink:href="#a"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.062 12L10 8 6 4"/></g></svg>
      </button>
    </div>
  </div>
</template>
<script>
  import VvBaseButton from '@/shared/components/BaseButton';
  import VvBackButton from '@/shared/components/BackButton';
  import VvAvailabilityCalendar from './AvailabilityCalendar';

  export default {
    name: 'AvailabilityCalendar',
    components: {
      VvAvailabilityCalendar,
      VvBaseButton,
      VvBackButton,
    },
    methods: {
      goToNext() {
        this.$router.push({ name: 'webinarDefault' });
        this.$store.commit('mentoring/enrollmentStepsIncrement');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .start-subtitle {
    margin-bottom: 50px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }
</style>

