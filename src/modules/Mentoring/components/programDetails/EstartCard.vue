<template>
  <vv-simple-card class="vv-estart-card">
    <div slot="header" class="header">
      <div class='header-title'>Estart</div>
      <div class='progress'>
        <div class='progress-bar'>
          <div class='bar' :style='{width: barWidth + "%"}'></div>
        </div>
        <div class='progress-data'>Lectures 3/10</div>
      </div>
    </div>
    <div slot="content" class="content mt-4">
      <v-layout class='content-avatars' justify-center="true">
        <vv-avatars :avatars='users' size='60'>
          <div slot='data' class='data-bottom'>    
            {{ users[0].name }} & {{ users[1].name }}
          </div>
        </vv-avatars>
      </v-layout>
      <div class="content-date">
        <div class='content-time'>Wed 27 Jan • 10:00</div>
        <div class='content-text'>Next appointment</div>
      </div>
      <div class="content-session">
        <div class='btn-wrap'>
          <button class='btn-session'>
            <span class='name'>Start session</span>
            <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#FFF" d="M5 8L2 5l3-3v1.8h2.4v2.4H5V8zm-1.2 2.7c.72 0 1.44-.12 2.16-.36.18-.06.42 0 .6.12l1.32 1.32c1.68-.84 3.06-2.28 3.96-3.96L10.52 6.5c-.18-.18-.24-.42-.12-.6.18-.66.3-1.38.3-2.1 0-.36.24-.6.6-.6h2.1c.36 0 .6.24.6.6C14 9.44 9.44 14 3.8 14c-.36 0-.6-.24-.6-.6v-2.1c0-.36.24-.6.6-.6z"/></svg>
          </button>
        </div>
        <div class="content-session-text">Preview session</div>
      </div>
    </div>
  </vv-simple-card>
</template>
<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvAvatars from '@/shared/components/Avatars';

  export default {
    name: 'EstartCard',
    components: {
      VvSimpleCard,
      VvAvatars,
    },
    props: ['users'],
    data() {
      return {
        barWidth: 30,
        users: {
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
<style lang="scss" scoped>
  @import '~@/styles/index';
  
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    &-title {
      @include calloutFont;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    &-avatars {
      margin-bottom: 14px;
    }

    &-date {
      margin-bottom: 24px;
    }

    &-time {
      margin-bottom: 1px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: $primary;
    }

    &-text {
      @include captionFont;
      text-align: center;
    }

    .btn-wrap {
      margin-bottom: 15px;
    }

    &-session-text {
      @include captionFont;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2px;
      text-align: center;
    }
  }

  // Btn
  .btn-session {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 211px;
    height: 40px;
    border-radius: 28.5px;
    background-color: #62d045;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: $white;
    transition: all 200ms ease-out;
    outline: none;

    &:hover {
      box-shadow: 0 6px 10px 0 rgba(#62d045, 0.5);
    }

    &:active {
      box-shadow: 0 2px 7px 0 rgba(#62d045, 0.5);
      background-color: darken(#62d045, 5%);
    }

    .name {
      display: inline-flex;
      margin-right: 5px;
    }

    .svg-icon {
      position: relative;
      top: 2px;
      fill: $white;
    }
  }

  // Progress
  .progress {
    &-bar {
     width: 108px;
     height: 8px;
     margin-bottom: 5px;
     border-radius: 5px;
     background-color: rgba($secondary, .1);
     overflow: hidden;
     
     .bar {
       width: 0%;
       height: 8px;
       background-color: $secondary;
     }
    }
    &-data {
      @include captionLight;
      text-align: right;
    }
  }
</style>
