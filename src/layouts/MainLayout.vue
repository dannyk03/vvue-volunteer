<template>
  <div>
    <vv-navbar />
    <div>
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

</style>
