<template>
  <vv-simple-card class="vv-welcome">
    <vv-match class="match" :user="user" :match="match" />
    <div class="welcome-block ">
      <i18n path="dashboard.welcome.title" tag="h1" class="display-1 heading">
        <span place="accent" class="accented">{{ user.firstName }}</span>
      </i18n>
      <p class="mt-3">Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new</p>
    </div>
    <v-spacer />
    <div class="actions">
      <div>Estart</div>
      <vv-base-button color="accent">
        Review Match
        <vv-arrow-icon class="btn-icon" target="right" color="white" />
      </vv-base-button>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvBaseButton from '@/shared/components/BaseButton';
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvArrowIcon from '@/shared/components/ArrowIcon';
  import VvMatch from '../components/Match';

  export default {
    name: 'Welcome',
    components: {
      VvBaseButton,
      VvSimpleCard,
      VvMatch,
      VvArrowIcon,
    },
    props: {
      user: {
        name: String,
      },
      match: Object,
    },
  };
</script>

<style lang="scss" scoped>
  .vv-welcome {
    display: flex;
    align-items: center;
    padding: 30px 20px 30px 64px !important;
    
    .match {
      min-width: 190px;
    }

    .welcome-block {
      margin-left: 86px;
      max-width: 400px;
    }

    .actions {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;

      .btn-icon {
        margin-top: 2px;
      }
    }
  }
</style>