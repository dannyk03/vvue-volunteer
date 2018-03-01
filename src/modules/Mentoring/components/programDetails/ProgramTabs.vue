<template>
  <vv-simple-card class="vv-mentoring-tabs">
    <div slot="content" class="content">
      <v-tabs
        class="vv-tabs"
        v-model="active"
        light
        slider-color="primary">
        <v-tab key="match" :ripple="false"  @click.native="changeTab('match')">
          Status
        </v-tab>
        <v-tab key="chat" :ripple="false" @click.native="changeTab('chat')">
          Chat
        </v-tab>
        <v-tab key="preparation" :ripple="false" @click.native="changeTab('preparation')">
          Preparation
        </v-tab>
        <v-tab key="schedule" :ripple="false" @click.native="changeTab('schedule')">
          Schedule
        </v-tab>

        <v-tab-item key="match">
          <vv-match :match='matchData' />
        </v-tab-item>
        <v-tab-item key="chat">
          Chat
        </v-tab-item>
        <v-tab-item key="preparation">
          <vv-preparation :preparation='preparationData' />
        </v-tab-item>
        <v-tab-item key="schedule">
          <vv-schedule :schedule='scheduleData' />
        </v-tab-item>
      </v-tabs>

      <div class='hint'>
        <v-tooltip content-class="customTooltip right details-tabs" left max-width='210'>
          <div slot="activator">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path stroke="#6C6C72" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path fill="#6C6C72" d="M11 18h2v-2h-2zm1-12c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></g></svg>
          </div>
          <span>This is your personal board, leave some information or hints for your relationship.</span>
        </v-tooltip>
      </div>
    </div>
  </vv-simple-card>
</template>

<script>
  import axios from 'axios';

  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvMatch from './Match';
  import VvPreparation from './Preparation';
  import VvSchedule from './Schedule';

  export default {
    name: 'ProgramTabs',
    components: {
      VvSimpleCard,
      VvMatch,
      VvSchedule,
      VvPreparation,
    },
    props: {
      tab: String,
      // selectedUser: Object,
    },
    data() {
      return {
        active: null,
        tabs: {
          match: 0,
          chat: 1,
          preparation: 2,
          schedule: 3,
        },
        matchData: null,
        preparationData: null,
        scheduleData: null,
      };
    },
    methods: {
      changeTab(tab) {
        this.$router.push(tab);
      },
    },
    mounted() {
      this.active = this.tabs[this.tab];
    },
    created() {
        console.log('Details created');
        axios.get('http://localhost:8080/static/data/p3-p5.json')
          .then((response) => {
            this.matchData = response.data.match;
            this.preparationData = response.data.preparation;
            this.scheduleData = response.data.schedule;
          })
          .catch((error) => { console.log(error); });
      },
  };
</script>

<style lang="scss">
  @import '~@/styles/colors';

  .vv-mentoring-tabs {
    padding: 0 !important;
    position: relative;

    .hint {
      position: absolute;
      top: 13px;
      right: 15px;
      cursor: pointer;
    }

    .vv-tabs {
      width: 100%;
      position: relative;

      .tabs__bar {
        &:after {
          content: '';
          display: block;
          height: 1px;
          width: 100%;
          background: $tertiaryGrey;
        }
      }
      .tabs__div {
        width: 120px;
        text-transform: none;
        color: $secondaryGrey !important;

        .tabs__item {
          transition: none;
        }

        .tabs__item--active {
          font-weight: 600;
          color: $primary !important;
        }
      }

      .tabs__content {
        transition: none;
        padding: 20px;
      }
    }
  }
</style>
