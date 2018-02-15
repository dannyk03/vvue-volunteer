<template>
  <div>
    <vv-navbar />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import VvNavbar from '@/shared/components/Navbar';

export default {
  name: 'MainLayout',
  components: {
    VvNavbar,
  },
};
</script>

<style lang="scss" scoped>
  .content-wrapper {
    height: calc(100vh - 80px);
    padding: 30px 100px;
    overflow-y: auto;
  }
</style>
