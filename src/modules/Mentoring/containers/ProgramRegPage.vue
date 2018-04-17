<template>
  <div class="vv-program-reg-page">
    <div class='content'>
      <div class="content-wrap">
        <h1 class='display-1 heading'>Let me tell you a <span class='accented'>story first</span></h1>
        <div class='description'>
          <p>With the exception of Nietzsche, no other madman has contributed so much to human sanity as has Louis Althusser. He is mentioned twice in the Encyclopaedia Britannica as someone’s teacher. There could be no greater lapse: for two important decades (the 60s and the 70s), Althusser was at the eye of all the important cultural storms. He fathered quite a few of them.</p>
          <p>This newly-found obscurity forces me to summarize his work before suggesting a few (minor) modifications to it.</p>
        </div>
        <div class="btn-wrap">
          <router-link :to='{ name: "startDefault" }' tag='span' class='btn-mentor'>
            <vv-base-button class='btn-mentor' color="accent" type="button" >Participate as mentor</vv-base-button>
          </router-link>
          <router-link :to='{ name: "startDefault" }' tag='span'>
            <vv-base-button color="accent" type="button" :outline='true'>Participate as mentee</vv-base-button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="reg-image" />
  </div>
</template>
<script>
  import VvBaseButton from '@/shared/components/BaseButton';

  export default {
    name: 'ProgramReg',
    components: {
      VvBaseButton,
    },
    data() {
      return {
        program: null,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .vv-program-reg-page {
    display: grid;
    grid-template-areas:
      "content  image"
      "content  image";
    grid-template-columns: 1fr 520px;
    // grid-template-rows: 1fr 130px;
    height: 100vh;
  }

  .content {
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    
    &-wrap {
      max-width: 500px;
    }
  }

  .reg-image {
    grid-area: image;
    background: no-repeat url('/static/images/onboarding-main-image.jpg') center center;
    background-size: cover;
  }

  .heading {
    margin-bottom: 40px;
  }

  .description {
    max-width: 500px;
    margin-bottom: 50px;
    font-size: 14px;
    line-height: 1.57;
    color: $primaryGrey;

    p:first-child {
      margin-bottom: 20px;
    }
  }

  .btn-mentor {
    display: inline-block;
    margin-right: 17px;
  }
</style>


