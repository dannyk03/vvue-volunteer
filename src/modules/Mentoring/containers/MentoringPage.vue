<template>
  <div class="vv-mentoring-page">
    <ul class='mentoring-steps'>
      <li class='is-active'></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <router-view></router-view>

    <div class='mentoring-nav'>
      <button class='mentoring-nav-back'>
        <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M0 0h16v16H0z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#417505" fill-opacity="0" xlink:href="#a"/><path stroke="#6C6C72" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.938 12L6 8l4-4"/></g></svg>
        <span>Back</span>
      </button>

      <button class='mentoring-nav-next' @click='nextStep'>
        <span>Next</span>
        <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M0 0h16v16H0z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#417505" fill-opacity="0" xlink:href="#a"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.062 12L10 8 6 4"/></g></svg>
      </button>
    </div>


    <v-dialog v-model="dialog" max-width="442">
      <div class="req-card">
        <button class='req-card-close' @click.native="dialog = false">
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width='10' height='10' viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
        </button>
        <div class='req-card-title'>Requirements</div>
        <div class='req-card-subtitle'>Please make sure you fulfill the requirements for eStart programm.</div>
        <ul class='req-card-list'>
          <li>I am native German speaker</li>
          <li>I am at least 18 years old</li>
          <li>Some other requirment</li>
        </ul>
        <div class="req-card-btn-wrap">
          <!-- <button type='button' @click.native="dialog = false">Cancel</button>
          <button>Proceed</button> -->
          <v-btn  @click.native="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="test">Proceed</v-btn>
        </div>
          
      </div>
    </v-dialog>


    <!-- <vv-estart-card class="estart-card" />
    <vv-system-check class="system-check" />
    <vv-mentoring-tabs class="body" :tab="tab" :selectedUser="selectedUser" />
    <vv-chat-list class="chat" /> -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VvSystemCheck from '@/shared/components/SystemCheck';
  import VvEstartCard from '../components/EstartCard';
  import VvChatList from './ChatList';
  import VvMentoringTabs from './MentoringTabs';

  // steps
  import VvStart from '../components/Start';

  export default {
    name: 'MentoringPage',
    components: {
      VvEstartCard,
      VvSystemCheck,
      VvChatList,
      VvMentoringTabs,

      // steps
      VvStart
    },
    props: {
      tab: String,
    },
    data() {
      return {
        dialog: false
      };
    },
    computed: {
      ...mapGetters('mentoring', {
        selectedUser: 'getSelectedUser',
      }),
    },
    methods: {
      nextStep() {
        this.dialog = true;
        // console.log(this.$route);
      },
      test() {
        console.log('test');
      }
    }
  };
</script>

<style type="text/scss" lang="scss">
  @import "~@/styles/index";

  .vv-mentoring-page {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 21px;
    position: relative;

    // display: grid;
    // height: 100%;
    // grid-gap: 20px;

    // grid-template-columns: 250px 1fr 200px;
    // // grid-template-rows: 191px 186px 1fr;
    // grid-template-areas:
    //   "estart body chat"
    //   "system body chat";

  }
  // .estart-card {
  //   grid-area: estart;
  // }

  // .system-check {
  //   grid-area: system;
  // }

  // .body {
  //   grid-area: body;
  // }

  // .chat {
  //   grid-area: chat;
  // }

  // stepts
  .mentoring-title {
    font-size: 35px;
    color: $primaryDark;
    font-weight: 500;
  }

  .page-subtitle {
    font-size: 17px;
    line-height: 1.41;
    color: $primaryGrey;
  }


  // steps
  .mentoring-steps {
    display: flex;
    list-style-type: none;
    position: absolute;
    top: 35px;
    right: 0;
    left: auto;
    bottom: auto;

    li:first-child {
      margin-right: 0;
    }
    li {
      width: 11px;
      height: 11px;
      margin-left: 15px;
      border-radius: 50%;
      border: solid 1px $secondary;

      &.is-active {
        background-color: $secondary;
      }
    }
  }

  // nav
  .mentoring-nav {
    display: flex;
    justify-content: space-between;
    
    &-back {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      color: $primaryGrey;
      text-transform: uppercase;

      .svg-icon {
        margin-right: 2px;
      }
    }

    &-next {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 40px;
      font-size: 14px;
      // font-weight: 600;
      color: $white;
      border-radius: 28px;
      background-color: #fad46f;
    }
  }

  .req-card {
    padding: 25px 30px;
    border-radius: 3px;
    background-color: $white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
    position: relative;

    &-close {
      padding: 8px;
      position: absolute;
      top: 0;
      right: 8px;
    }

    &-title {
      margin-bottom: 7px;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.2px;
      color: $primaryDark;
    }

    &-subtitle {
      margin-bottom: 33px;
      font-size: 17px;
      line-height: 1.41;
      // color: $primaryGray;
    }

    &-list {
      margin-bottom: 40px;
      font-size: 14px;
      font-weight: 500;
      color: $primaryDark;
      font-weight: bold;
      list-style-type: disc;
      list-style-position: inside;

      li:last-child {
        margin-bottom: 0;
      }

      li {
        margin-bottom: 10px;
      }
    }
  }
</style>
