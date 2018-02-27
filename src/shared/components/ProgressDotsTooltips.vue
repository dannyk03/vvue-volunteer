<template>
  <div class="progress-dots">
    <v-tooltip top content-class="customTooltip"  class='progress-dots-tooltip' v-for="(n, index) in total" :key='index'>
      <div slot="activator" :class="getClass(n)"></div>
      <span>{{ steps[index] }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'ProgressDots',
  props: {
    current: [String, Number],
    total: [String, Number],
  },
  data() {
    return {
      steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
    };
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

    &-tooltip {
      margin-right: 10px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid $secondary;
      cursor: pointer;

      &.done {
        background-color: $secondary;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
</style>
