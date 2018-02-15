<template>
  <div class='vv-colleagues-page'>
    <div class="header">
      <h1 class="heading display-1" v-t="'dashboard.colleagues.title'" />
      <div class="contact-label">
        <div>Want to get an embassador?</div>
        <div>Contact XYZ</div>
      </div>
    </div>
    <vv-invite-list class="invite-list" :list="invites" />
    <vv-invite-form class="invite-form" />
    <vv-downloads-list class="downloads-list" />
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex';
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvInviteList from '../components/InviteList';
  import VvInviteForm from '../components/InviteForm';
  import VvDownloadsList from '../components/DownloadsList';

  export default {
    name: 'ColleaguesPage',
    components: {
      VvSimpleCard,
      VvInviteList,
      VvInviteForm,
      VvDownloadsList,
    },
    data() {
      return {
        // temp hardcoded data
        invites: [
          {
            user: {
              avatar: 'http://attackongeek.com/wp-content/uploads/2018/01/black-widow-scarlett-johansson-10-most-skillful-spies-not-james-bond1.jpg',
              firstName: 'Black',
              lastName: 'Widow',
            },
            status: 'Accepted invite',
          },
          {
            user: {
              avatar: 'https://cdn.jwplayer.com/thumbs/WNcPjgNz-720.jpg',
              firstName: 'Spider',
              lastName: 'Man',
            },
            status: 'Accepted invite',
          },
          {
            email: 'test@email.com',
            status: 'Pending invitation',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .vv-colleagues-page {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 130px 210px 1fr;
    grid-gap: 20px;
    grid-template-areas:
      "header      header"
      "invite-list invite-form"
      "invite-list downloads-list";

    .header {
      grid-area: header;
      align-self: center;
      display: flex;
      justify-content: space-between;

      .contact-label {
        text-align: right;
      }
    }

    .invite-list {
      grid-area: invite-list;
    }

    .invite-form {
      grid-area: invite-form;
    }

    .downloads-list {
      grid-area: downloads-list;
    }
  }
</style>
