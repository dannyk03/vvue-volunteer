<template>
  <div class="progress-simple">{{current}}/{{total}}</div>
</template>

<script>
export default {
  name: 'ProgressSimple',
  props: {
    current: [String, Number],
    total: [String, Number],
  },
};
</script>

<style>
  .progress-simple {
    font-weight: bold;
  }
</style>
