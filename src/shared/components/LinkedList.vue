<template>
  <ul class="vv-linked-list">
    <li class="item" v-for="item in list">
      <div class="item-image">
        <slot name="icon" :item="item" />
      </div>
      <slot name="body" :item="item" />
    </li>
  </ul>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import VvAvatar from '@/shared/components/Avatar';

  export default {
    name: 'LinkedList',
    components: {
    },
    props: {
      list: Array,
    },
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/colors';
  @import '~@/styles/fonts';

  .vv-linked-list {

    width: 100%;
    list-style: none;
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      &:not(:last-child) {
        .item-image {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            height: 30px;
            width: 1px;
            background-color: #E0E0E0;
            bottom: -115%;
            left: 50%;
          }
        }
      }
    }
  }
</style>
