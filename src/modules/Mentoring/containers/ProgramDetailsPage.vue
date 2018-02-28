<template>
  <div class='vv-program-details-page-wrap'>
    <div class='content-wrapper'>
      <div class="vv-program-details-page">
        <div class='sidebar'>
          <vv-estart-card class="estart-card" :users='program.users' />
          <vv-system-check class="system-check" />
        </div>
        <vv-program-tabs class="body" :tab="tab" :selectedUser="selectedUser" />
      </div>
    </div>
    <vv-chat-list class="chat" />
  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';
  import { mapGetters } from 'vuex';

  import VvChatList from '@/shared/components/ChatList';
  import VvSystemCheck from '../components/programDetails/SystemCheck';
  import VvEstartCard from '../components/programDetails/EstartCard';
  import VvProgramTabs from '../components/programDetails/ProgramTabs';

  export default {
    name: 'ProgramDetails',
    components: {
      VvSystemCheck,
      VvChatList,
      VvEstartCard,
      VvProgramTabs,
    },
    data() {
      return {
        program: null,
      };
    },
    computed: {
      ...mapGetters('mentoring', {
        selectedUser: 'getSelectedUser',
      }),
    },
    methods: {
    },
    created() {
      const id = this.$route.params['program_id'];

      axios.get('http://localhost:8080/static/data/p2-1.json')
        .then((response) => {
          this.program = _.find(response.data.data, (item) => {
            return item.id === id;
          });

          console.log(this.program);
        })
        .catch((error) => console.log(error));
    },
  };
</script>

<style type="text/scss" lang="scss">
  @import "~@/styles/index";

  .vv-program-details-page {
    display: flex;

    &-wrap {
      position: relative;
    }
    
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
