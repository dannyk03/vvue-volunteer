<template>
  <div class="vv-default-enrollment-page">
    <ul class='mentoring-steps'>
      <li class='is-active'></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <router-view></router-view>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import VvSystemCheck from '@/shared/components/SystemCheck';
  import VvEstartCard from '../components/EstartCard';
  import VvChatList from './ChatList';
  import VvMentoringTabs from './MentoringTabs';


  export default {
    name: 'MentoringPage',
    components: {
      VvEstartCard,
      VvSystemCheck,
      VvChatList,
      VvMentoringTabs,

    },
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters('mentoring', {
        selectedUser: 'getSelectedUser',
      }),
    },
    methods: {
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

  .mentoring-steps {
    display: flex;
    list-style-type: none;
    position: absolute;
    top: 35px;
    right: 0;
    left: auto;
    bottom: auto;

    li:first-child {
      margin-right: 0;
    }
    li {
      width: 11px;
      height: 11px;
      margin-left: 15px;
      border-radius: 50%;
      border: solid 1px $secondary;

      &.is-active {
        background-color: $secondary;
      }
    }
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
