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
      <h1>Content</h1>
    </div>
    <!-- <div slot="header" class="content">
      <div class="header">
        <img :src="program.image" alt="">
      </div>
      <p class="card-title">{{ program.title }}</p>
      <img :src="program.image" alt="" height="300" width="250" />
      <div class="bottom">
        <p class="name fontAccented accented mb-1">{{ program.name }}</p>
        <p class="description">{{ program.description }}</p>
      </div>
    </div> -->
    
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'CurrentProgramCard',
    components: {
      VvSimpleCard,
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
    data: () => ({

    }),
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-simple-program-card {
    width: 350px;
    height: 411px;
    border-radius: 6px !important;
    overflow: hidden;
    cursor: pointer;
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
    padding: 20px;
  }
</style>
