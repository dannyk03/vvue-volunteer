<template>
  <v-select
    class="vv-select"
    :items="items"
    :label="label"
    v-model="model"
    :autocomplete="autocomplete"

    dense
    multiple
    chips
    deletable-chips
  />
</template>

<script>
export default {
  name: 'MultiSelect',
  props: {
    label: String,
    items: Array,
    value: {
      type: Array,
      default: () => [],
    },
    autocomplete: Boolean,
  },
  data: () => ({
    model: null,
  }),
  watch: {
    model(value, oldValue) {
      if (oldValue === null && value === '') return;
      this.$emit('input', value);
    },
  },
  created() {
    this.model = this.value;
  },
};
</script>

<style lang="scss">
  @import "~@/styles/colors";

  .vv-select {
    .chip {
      &.chip--select-multi {
        height: 25px;
        font-size: 13px;
        background: #fff;
        border: 1px solid #000;

        &.chip--removable {
          .chip__close {
            i {
              font-size: 18px !important;
            }
          }
        }
      }
    }
  }

</style>
