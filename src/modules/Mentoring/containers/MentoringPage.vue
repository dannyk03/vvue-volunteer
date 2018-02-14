<template>
  <div class="vv-mentoring-page">
    <vv-estart-card class="estart-card" />
    <vv-system-check class="system-check" />
    <vv-mentoring-tabs class="body" :tab="tab" :selectedUser="selectedUser" />
    <vv-chat-list class="chat" />
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
    props: {
      tab: String,
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
  };
</script>

<style type="text/scss" lang="scss" scoped>
  .vv-mentoring-page {
    display: grid;
    height: 100%;
    grid-gap: 20px;

    grid-template-columns: 250px 1fr 200px;
    // grid-template-rows: 191px 186px 1fr;
    grid-template-areas:
      "estart body chat"
      "system body chat";

    .estart-card {
      grid-area: estart;
    }

    .system-check {
      grid-area: system;
    }

    .body {
      grid-area: body;
    }

    .chat {
      grid-area: chat;
    }
  }
</style>
