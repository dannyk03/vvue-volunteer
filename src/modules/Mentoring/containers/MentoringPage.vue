<template>
  <div class="vv-mentoring-page">
    <div class='sidebar'>
      <vv-estart-card class="estart-card" />
      <vv-system-check class="system-check" />
    </div>
    <vv-mentoring-tabs class="body" :tab="tab" :selectedUser="selectedUser" />
    <!-- <vv-chat-list class="chat" /> -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import VvSystemCheck from '@/shared/components/SystemCheck';
  import VvEstartCard from '../components/mentoringPageComponents/EstartCard';
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

  .vv-mentoring-page {
    display: flex;
    
    .sidebar {
      margin-right: 20px;
      max-width: 250px;
    }
  //   display: grid;
  //   height: 100%;
  //   grid-gap: 20px;
  //   padding-bottom: 32px;

  //   grid-template-columns: 250px 1fr 200px;
  //   // grid-template-rows: 191px 186px 1fr;
  //   grid-template-areas:
  //     "estart body chat"
  //     "system body chat";

    .estart-card {
      margin-bottom: 20px;
      // grid-area: estart;
    }

  //   .system-check {
  //     grid-area: system;
  //   }

    .body {
      min-width: 600px;
    }

  //   .chat {
  //     grid-area: chat;
  //   }
  }
</style>
