export default {
  methods: {
    notifySuccess(text) {
      this.$notify({
        group: 'main',
        type: 'success',
        title: 'Success',
        text,
      });
    },
    notifyError(text) {
      this.$notify({
        group: 'main',
        type: 'error',
        title: 'Error',
        text,
      });
    },
  },
};
