<template>
  <vv-simple-card class="vv-mentoring-tabs">
    <div slot="content" class="content">
      <v-tabs
        class="vv-tabs"
        v-model="active"
        light
        slider-color="primary"
      >
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
          <vv-match :match="selectedUser" />
        </v-tab-item>
        <v-tab-item key="chat">
          Chat
        </v-tab-item>
        <v-tab-item key="preparation">
          <vv-preparation></vv-preparation>
        </v-tab-item>
        <v-tab-item key="schedule">
          <vv-schedule></vv-schedule>
        </v-tab-item>
      </v-tabs>

    </div>
  </vv-simple-card>
</template>

<script>
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
    selectedUser: Object,
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
};
</script>

<style lang="scss">
@import '~@/styles/colors';

  .vv-mentoring-tabs {
    padding: 0 !important;

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
