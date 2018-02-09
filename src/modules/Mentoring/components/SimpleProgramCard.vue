<template>
  <vv-simple-card class="vv-simple-program-card">
    <div slot="content" class="content">
      <p class="card-title">{{program.title}}</p>
      <img :src="program.image" alt="" height="300" width="250" />
      <div class="bottom">
        <p class="name fontAccented accented mb-1">{{program.name}}</p>
        <p class="description">{{program.description}}</p>
      </div>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'EstartCard',
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
    width: 250px;
    height: 421px;
    border-radius: 6px !important;
    overflow: hidden;
    cursor: pointer;

    padding: 0 !important;

    .content {
      display: flex;
      flex-direction: column;
      position: relative;

      .card-title {
        font-size: 20px;
        color: white;
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        font-weight: 600;
      }

      img {
        object-fit: cover;
      }

      .bottom {
        padding: 20px;

        .name {
          font-size: 24px;
        }

        .description {
          font-size: 14px;
          color: $primaryGrey;
        }
      }
    }


  }
</style>
