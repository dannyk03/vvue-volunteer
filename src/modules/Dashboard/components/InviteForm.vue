<template>
  <vv-simple-card class="vv-invite-form">
    <div slot="header" class="header">
      <span v-t="'dashboard.colleagues.inviteForm.title'" />
    </div>
    <div slot="content" class="content mt-4">
      <v-form class="form" ref="form" @submit.prevent="invite">
        <vv-base-text-input
          class="input mb-4"
          v-model="model.email"
          label="Invite by email address"
        />
        <vv-base-button
          color="accent"
          type="submit"
          class="send-btn"
        >
          Invite
        </vv-base-button>
      </v-form>
      <div>
        <a href="#">Share public link</a>
      </div>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvBaseTextInput from '@/shared/components/BaseTextInput';
  import VvBaseButton from '@/shared/components/BaseButton';

  export default {
    name: 'InviteForm',
    components: {
      VvSimpleCard,
      VvBaseTextInput,
      VvBaseButton,
    },
    data() {
      return {
        model: {
          email: '',
        },
      };
    },
    props: {
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-invite-form {
    .header {
      @include calloutFont;
    }

    .form {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      .input {
        margin-right: 20px;
      }
      .send-btn {
        transform: translateY(-3px);
        min-width: 120px;
        width: 120px;
      }
    }

    a {
      @include calloutFont;
      color: $primary;
      letter-spacing: 0.5px;
      text-decoration: none;
    }
  }
</style>
