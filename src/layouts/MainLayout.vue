<template>
  <div>
    <section>
      <vv-language-picker />
      <vv-navbar />
    </section>
    <router-view />
  </div>
</template>

<script>
import VvNavbar from '@/shared/components/Navbar';
import VvLanguagePicker from '@/shared/components/LanguagePicker';

export default {
  name: 'MainLayout',
  components: {
    VvNavbar,
    VvLanguagePicker,
  },
};
</script>

<style lang="scss" scoped>
  section {
    height: 50px;
    background-color: lightgrey;
  }
</style>
