<template>
  <div class="progress-dots">
    <div v-for="n in total" :class="getClass(n)"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressDots',
  props: {
    current: [String, Number],
    total: [String, Number],
  },
  methods: {
    getClass(n) {
      return `dot ${n <= this.current ? 'done' : ''}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .progress-dots {
    display: flex;
    justify-content: space-between;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid $secondary;

      &.done {
        background-color: $secondary;
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
</style>
