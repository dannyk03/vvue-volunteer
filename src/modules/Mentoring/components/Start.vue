<template>
  <div class='start'>
    <h1 class='mentoring-title heading'>Welcome to our <span class='accented'><span class='fontAccented'>e</span>Start</span> enrolment.</h1>
    <p class='start-subtitle page-subtitle'>In the following you will answer a couple of questions that will help us to connect you with a mentee/mentor that is a great fit for you! Your answers will not be shared with anyone and will only be used for the matching process. </p>

    <ul class="start-users">
      <li class='start-user'>
        <div class='start-user-bubble'>We both want to be entrepreneurs in the field of IT. We had so much to talk about and I myself started to pursue my own dreams again.</div>
        <div class='start-user-data'>
          <div class='start-user-avatar'>
            <img src="https://images.unsplash.com/photo-1483555714914-20a74b6e45f5?ixlib=rb-0.3.5&s=d5c771785cf9d62f7004ed941051a79f&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="">
          </div>
          <div class='start-user-role'>Mentor</div>
        </div>
      </li>
      <li class='start-user'>
        <div class='start-user-bubble'>Football is close to my heart and so it is for my mentor. This shared passion allowed us to start our first conversation natually. </div>
        <div class='start-user-data'>
          <div class='start-user-avatar'>
            <img src="https://www.allkpop.com/upload/2017/12/af_org/27055107/oh-my-girl.jpg" alt="">
          </div>
          <div class='start-user-role'>Mentee</div>
        </div>
      </li>
    </ul>
  </div>  
</template>
<script>
export default {
  name: 'Start',
}
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
</style>

