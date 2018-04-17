<template>
  <div class="file-picker">
    <div @click="openDialog">
      <slot />
    </div>
    <input
      ref="input"
      type="file"
      @change="handleFilePick"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  name: 'FilePicker',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({

  }),
  methods: {
    openDialog() {
      this.$refs.input.click();
    },
    handleFilePick(e) {
      const file = e.target.files[0];

      this.$emit('pick', file);
    },
  },
};
</script>

<style lang="scss" scoped>
  .file-picker {
    input {
      display: none;
    }
  }
</style>
