<template>
  <vv-simple-card class="vv-chat-list">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum quaerat temporibus iure libero aut rerum nesciunt, eveniet quibusdam sed fugiat iste voluptates quae quia tenetur animi consectetur eum corporis!</p>
  </vv-simple-card>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'ChatList',
    components: {
      VvSimpleCard,
    },
    data: () => ({

    }),
  };
</script>

<style lang="scss" scoped>
  .vv-chat-list {
    max-width: 200px;
    width: 100%;
  }
</style>
