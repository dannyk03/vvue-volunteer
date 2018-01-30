<template>
  <div class="vv-simple-radio-picker">
    <div
      v-for="item in options"
      :class="getClass(item.value)"
      @click="select(item.value)"
      data-separator="or"
    >
      <vv-icon
        v-if="item.icon"
        :name="item.icon"
        width="24"
        height="24"
        :fill="false"
        :backgroundColor="getIconColor(item)"
      />
      <span v-else>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
import vModelMixin from '@/shared/mixins/vModelMixin';
import VvIcon from '@/shared/components/BaseIcon';

export default {
  name: 'SimpleRadioPicker',
  mixins: [vModelMixin],
  components: {
    VvIcon,
  },
  props: {
    options: Array,
  },
  methods: {
    select(lang) {
      this.model = lang;
    },
    getClass(val) {
      return `option ${this.model === val ? 'checked' : ''}`;
    },
    getIconColor(item) {
      return this.model === item.value ? 'white' : '#c1c1c1';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~@/styles/colors';

  .vv-simple-radio-picker {
    display: flex;
    align-items: center;
    user-select: none;

    .splitter {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      color: $secondaryGrey;
      font-weight: bold;
    }

    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px solid $secondaryGrey;
      color: $secondaryGrey;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;

      &:not(:last-child) {
        position: relative;
        margin-right: 60px;

        &::after {
          content: attr(data-separator);
          position: absolute;
          right: -32px;
          transform: translateX(50%);
          pointer-events: none;
          color: $secondaryGrey;
        }
      }

      &.checked {
        background-color: $primaryGrey;
        border-color: $primaryGrey;
        color: $white;
        pointer-events: none;
      }
    }
  }
</style>
