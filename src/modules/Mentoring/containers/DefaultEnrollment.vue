<template>
  <div class="vv-default-enrollment-page">
    <div class='enrollment-indicator'>
      <vv-progress-dots class="progress-indicator" :current="enrollmentSteps" :total="4" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import VvSystemCheck from '@/shared/components/SystemCheck';
  import VvProgressDots from '@/shared/components/ProgressDots';
  import VvEstartCard from '../components/EstartCard';
  import VvChatList from './ChatList';
  import VvMentoringTabs from './MentoringTabs';


  export default {
    name: 'DefaultEnrollment',
    components: {
      VvEstartCard,
      VvSystemCheck,
      VvChatList,
      VvMentoringTabs,
      VvProgressDots,
    },
    data() {
      return {
        step: 1,
      };
    },
    computed: {
      ...mapGetters('mentoring', {
        selectedUser: 'getSelectedUser',
        enrollmentSteps: 'getEnrollmentSteps',
      }),
    },
  };
</script>

<style type="text/scss" lang="scss">
  @import "~@/styles/index";

  .vv-default-enrollment-page {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 21px;
    position: relative;
  }

  .mentoring-title {
    font-size: 35px;
    color: $primaryDark;
    font-weight: 500;
  }

  .page-subtitle {
    font-size: 17px;
    line-height: 1.41;
    color: $primaryGrey;
  }

  .enrollment-indicator {
    position: absolute;
    top: 35px;
    right: 0;
    left: auto;
    bottom: auto;
  }

  // nav
  .mentoring-nav {
    display: flex;
    justify-content: space-between;
    
    &-back {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      color: $primaryGrey;
      text-transform: uppercase;
      outline: none;

      .svg-icon {
        margin-right: 2px;
      }
    }

    &-next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 40px;
      font-size: 14px;
      color: $white;
      border-radius: 28px;
      background-color: #fad46f;
      outline: none;
    }
  }
</style>
