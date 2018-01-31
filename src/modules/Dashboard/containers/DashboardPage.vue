<template>
  <div class='vv-dashboard-page'>
    <vv-welcome :user="user" :match="match" class="welcome">Welcome</vv-welcome>
    <vv-simple-card class="ranking">Ranking</vv-simple-card>
    <vv-simple-card class="tips">Tips and Tricks</vv-simple-card>
    <vv-simple-card class="activity">Activity</vv-simple-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvWelcome from '../components/Welcome';

  export default {
    name: 'DashboardPage',
    components: {
      VvSimpleCard,
      VvWelcome,
    },
    data() {
      return {
        // temp hardcoded match
        match: {
          firstName: 'Hulk',
          avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
        },
      };
    },
    computed: {
      ...mapGetters('global/user', {
        user: 'getUser',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .vv-dashboard-page {
    display: grid;
    height: 100%;
    grid-template-columns: 315px 1fr;
    grid-template-rows: 191px 186px 1fr;
    grid-gap: 20px;
    grid-template-areas:
      "welcome welcome"
      "ranking activity"
      "tips    activity";

    .welcome {
      grid-area: welcome;
    }

    .ranking {
      grid-area: ranking;
    }

    .tips {
      grid-area: tips;
    }

    .activity {
      grid-area: activity;
    }
  }
</style>
