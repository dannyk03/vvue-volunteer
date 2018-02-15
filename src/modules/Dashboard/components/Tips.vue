<template>
  <vv-simple-card class="vv-tips">
    <div slot="header" class="header">{{ $t('dashboard.tips.title') }}</div>
    <div slot="content">
      <ul class="list">
        <li>
          <router-link :to="{ }">
            Did you know that it’s possible to participate again?
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'colleagues' }">
            Invite your colleague to receive bonus points and support us.
          </router-link>
        </li>
      </ul>
    </div>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'Tips',
    components: {
      VvSimpleCard,
    },
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";
  @import "~@/styles/colors";

  .vv-tips {
    .header {
      @include calloutFont;
    }

    .list {
      list-style: none;
      
      li {
        @include boldBodyFont;
        margin-bottom: 12px;

        a {
          color: $primaryDark !important;
        }
      }
    }
  }
</style>