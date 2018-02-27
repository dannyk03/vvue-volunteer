<template>
  <vv-simple-card class="vv-simple-program-card">
    <div slot="header" class="header">
      <div class="header-bg">
        <img :src="program.image" alt="">
      </div>
      <div class="header-title fontAccented">{{ program.name }}</div>
      <div class='header-description'>{{ program.description }}</div>
    </div>
    <div slot='content' class='content'>
      <div class='card-data'>
        <v-menu bottom left class='card-data-menu'>
          <v-btn icon slot="activator">
            <v-icon class='icon'>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, i) in menu" :key="i">
              <v-list-tile-title>{{ item }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <vv-avatars :avatars='users' size='40' class='avatars'>
          <div slot='data' class='data-left'>
            <div class='names'>{{ users.userOne.name }} & {{ users.userTwo.name }}</div>
            <div class='status'>{{ users.status }}</div>
          </div>
        </vv-avatars>

        <v-layout align-center justify-space-between>
          <vv-progress-dots-tooltips :current="currentSteps" :total="5" />
          <vv-base-button-arrow color='#00b1a7'>
            <span slot="name">see details</span>
          </vv-base-button-arrow>
        </v-layout>
      </div>
      <div class="card-links">
        <a href="">settings</a>
        <vv-base-button-arrow color='#6c6c72'>
          <span slot="name">participate again</span>
        </vv-base-button-arrow>
      </div>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvAvatars from '@/shared/components/Avatars';
  import VvProgressDotsTooltips from '@/shared/components/ProgressDotsTooltips';
  import VvBaseButtonArrow from '@/shared/components/BaseButtonArrow';

  export default {
    name: 'CurrentProgramCard',
    components: {
      VvSimpleCard,
      VvAvatars,
      VvProgressDotsTooltips,
      VvBaseButtonArrow,
    },
    props: {
      program: {
        id: Number,
        image: String,
        title: String,
        name: String,
        description: String,
      },
    },
    data() {
      return {
        menu: ['Some action', 'Invite collegue', 'Something else'],
        currentSteps: 4,
        users: {
          status: 'Unconfirmed match',
          userOne: {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Simon',
          },
          userTwo: {
            avatar: 'https://vvapiv2.wird.sehrgute.software/storage/uploads/user/avatar/28/medium/c3d297ffad0a275de0d127dff3668c68.jpeg',
            name: 'Max',
          },
        },
      };
    },
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-simple-program-card {
    width: 350px;
    height: 411px;
    border-radius: 6px !important;
    overflow: hidden;
    padding: 0 !important;
  }

  .header {
    height: 189px;
    overflow: hidden;
    position: relative;

    &-bg {
      display: flex;
      justify-content: center;
      height: 189px;
      overflow: hidden;

      img {
        align-self: center;
      }
    }

    &-title {
      position: absolute;
      top: 98px;
      left: 20px;
      right: auto;
      bottom: auto;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      color: $white;
    }

    &-description {
      max-width: 180px;
      position: absolute;
      top: 135px;
      left: 20px;
      right: auto;
      bottom: auto;
      font-size: 12px;
      font-weight: 500;
      color: $white;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }

  .card-data {
    width: 100%;
    margin-bottom: 42px;
    padding: 15px 11px 15px 15px;
    border: 1px solid $cardGrey;
    border-radius: 2px;
    position: relative;

    &-menu {
      position: absolute;
      top: 0;
      right: -5px;

      .icon {
        color: $primaryDark;
      }
    }
  }

  .card-links {
    text-align: right;
  }

  .avatars {
    display: flex;
    margin-left: -15px;
    margin-bottom: 15px;
  }

  .btn-arrow {
    .svg-icon {
      fill: red;
    }
  }
</style>
