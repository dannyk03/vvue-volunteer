<template>
  <svgicon :name="getIconName()" :fill="fill" :width="width" :height="height" :color="getColors()"></svgicon>
</template>

<script>
  export default {
    name: 'BaseIcon',
    props: {
      name: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        default: '31',
      },
      height: {
        type: String,
        default: '31',
      },
      color: {
        type: String,
        default: 'black',
      },
      backgroundColor: {
        type: String,
        default: 'transparent',
      },
      fill: {
        type: Boolean,
        default: true,
      },
    },
    methods: {
      getIconName() {
        return `${this.name}`;
      },
      getColors() {
        return `${this.backgroundColor} ${this.color}`;
      },
    },
  };
</script>
