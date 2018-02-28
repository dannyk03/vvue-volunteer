<template>
  <div>
    <h1 class='mentoring-title heading'><span class='accented'>webinar</span> preparation training</h1>
    <p class='start-subtitle page-subtitle'>Before meeting your trainne for the first time, you will receive an online training which prepares you in your role as a mentor. </p>

    <!-- TODO: refactoring this -->
    <div class='bottom'>
      <vv-back-button way='availabilityDefault' />

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

  export default {
    name: 'Webinar',
    components: {
      VvBaseButton,
      VvBackButton,
    },
    methods: {
      goToNext() {
        console.log('next step ??');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }
</style>


