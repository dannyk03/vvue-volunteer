<template>
  <div class='vv-dashboard-page'>
    <vv-welcome :user="user" :match="match" class="welcome">Welcome</vv-welcome>
    <vv-ranking class="ranking" :rankingStats="ranking" />
    <vv-tips class="tips" />    
    <vv-activity-stream class="activity" :activities="activities" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvWelcome from '../components/Welcome';
  import VvRanking from '../components/Ranking';
  import VvActivityStream from '../components/ActivityStream';
  import VvTips from '../components/Tips';

  export default {
    name: 'DashboardPage',
    components: {
      VvSimpleCard,
      VvWelcome,
      VvRanking,
      VvActivityStream,
      VvTips,
    },
    data() {
      return {
        // temp hardcoded match
        match: {
          firstName: 'Hulk',
          avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
        },
        ranking: {
          rating: 3,
          level: 'Beginner',
          activities: {
            participations: 2,
            mentoringSessions: 2,
            invitedColleagues: 0,
          },
        },
        activities: [
          {
            type: 'user',
            user: {
              avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d',
              firstName: 'Iron',
              lastName: 'Man',
              country: 'USA',
            },
            date: '1h ago',
            activity: 'We found a mentee for you',
          },
          {
            type: 'system',
            status: 'success',
            user: {
              avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d',
              firstName: 'Iron',
              lastName: 'Man',
              country: 'USA',
            },
            date: '1h ago',
            activity: 'You was accepted by a mentee',
          },
          {
            type: 'system',
            status: 'fail',
            user: {
              avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d',
              firstName: 'Iron',
              lastName: 'Man',
              country: 'USA',
            },
            date: '1h ago',
            activity: 'You was declined by a mentee',
          },
        ],
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
