<template>
  <v-btn
    :class="getClasses()"
    @click="$emit('click')"
    :disabled="disabled"
    :color="color"
    :outline="outline"
    :type="type"
    :to="to"
    depressed
    round
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    to: [String, Object],
  },
  methods: {
    getClasses() {
      return `ma-0 ${this.outline ? 'outline' : ''}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/colors";

  .btn {
    text-transform: none;
    font-weight: bold;
    min-width: 150px;

    .btn--depressed {

    }

    .btn-outline {

    }

    &.outline {
      color: $secondary;
      border-width: 2px;
    }
  }
</style>
