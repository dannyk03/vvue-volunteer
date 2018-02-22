<template>
  <div class='start'>
    <h1 class='mentoring-title heading'>Welcome to our <span class='accented'><span class='fontAccented'>e</span>Start</span> enrolment.</h1>
    <p class='start-subtitle page-subtitle'>In the following you will answer a couple of questions that will help us to connect you with a mentee/mentor that is a great fit for you! Your answers will not be shared with anyone and will only be used for the matching process. </p>

    <ul class="start-users">
      <li class='start-user'>
        <div class='start-user-bubble'>We both want to be entrepreneurs in the field of IT. We had so much to talk about and I myself started to pursue my own dreams again.</div>
        <div class='start-user-data'>
          <div class='start-user-avatar'>
            <img src="https://wallscover.com/images/face-wallpaper-18.jpg" alt="">
          </div>
          <div class='start-user-role'>Mentor</div>
        </div>
      </li>
      <li class='start-user'>
        <div class='start-user-bubble'>Football is close to my heart and so it is for my mentor. This shared passion allowed us to start our first conversation natually. </div>
        <div class='start-user-data'>
          <div class='start-user-avatar'>
            <img src="https://i.pinimg.com/564x/e9/70/67/e970671faa03af41e716cd7e63385034--unique-faces-face-reference.jpg" alt="">
          </div>
          <div class='start-user-role'>Mentee</div>
        </div>
      </li>
    </ul>

    <div class="bottom">
      <vv-back-button way='programs' />

      <button class='mentoring-nav-next' @click='showDialog'>
        <span>Next</span>
        <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><path id="a" d="M0 0h16v16H0z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#417505" fill-opacity="0" xlink:href="#a"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.062 12L10 8 6 4"/></g></svg>
      </button>
    </div>

    <!-- TODO: create new component for Modal -->
    <v-dialog v-model="dialog" max-width="442">
      <div class="req-card">
        <router-link to="/mentoring/start" tag='button' class='req-card-close' @click.native="dialog = false">
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width='10' height='10' viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
        </router-link>
        <div class='req-card-title'>Requirements</div>
        <div class='req-card-subtitle'>Please make sure you fulfill the requirements for eStart programm.</div>
        <ul class='req-card-list'>
          <li>I am native German speaker</li>
          <li>I am at least 18 years old</li>
          <li>Some other requirment</li>
        </ul>
        <div class="req-card-btn-wrap">
          <router-link :to='{name: "start"}' tag='button' class='btn-empty' @click.native="dialog = false">Cancel</router-link>
          <router-link :to='{ name: "typical-day"}' tag='button' class='btn-fill' @click.native='nextStep'>Proceed</router-link>
        </div>
      </div>
    </v-dialog>
  </div> 
</template>
<script>
  import VvBaseButton from '@/shared/components/BaseButton';
  import VvBackButton from '@/shared/components/BackButton';
  import VvNextButton from './NextButton';

  export default {
    name: 'Start',
    components: {
      VvBaseButton,
      VvBackButton,
      VvNextButton,
    },
    data() {
      return {
        dialog: false,
      };
    },
    methods: {
      showDialog() {
        this.dialog = true;
      },
      nextStep() {
        this.dialog = false;
        this.$store.commit(`mentoring/enrollmentStepsIncrement`);
      }
    },
    created() {
      this.$store.commit(`mentoring/resetEnrollmentSteps`);
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/index";

  .start {
    margin-bottom: 71px;
    &-subtitle {
      max-width: 720px;
      width: 100%;
      margin-bottom: 49px;
    }

    &-users {
      display: flex;
      margin-bottom: 58px;

      li:first-child {
        margin-right: 126px;
      }
    }

    &-user-bubble {
      width: 264px;
      padding: 15px 25px;
      margin-left: 141px;
      font-size: 12px;
      font-weight: 500;
      color: $white;
      background-color: $secondary;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    &-user-data {
      width: 141px;
    }

    &-user-avatar {
      display: flex;
      justify-content: center;
      width: 141px;
      height: 141px;
      margin-bottom: 15px;
      border: solid 1px $cardGrey;
      border-radius: 50%;
      overflow: hidden;

      img {
        align-self: center;
      }
    }

    &-user-role {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: $primaryDark;
    }
  }

  // dialog
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
      outline: none;
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
    &-btn-wrap {
      display: flex;
      justify-content: flex-end;

      .btn-fill {
        margin-left: 15px;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }

  .btn {

    &-fill {
      width: 75px;
      height: 30px;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.67;
      text-align: center;
      color: $white;
      border-radius: 15px;
      background-color: $primary;
      outline: none;
    }
    &-empty {
      width: 75px;
      height: 30px;
      border-radius: 15px;
      background-color: rgba(143, 206, 215, 0);
      border: solid 2px $secondaryGrey;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.67;
      text-align: center;
      color: $primaryGrey;
      outline: none;
    }
  }
</style>

