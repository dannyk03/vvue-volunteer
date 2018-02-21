<template>
  <label class='checkbox'>
    <input type="checkbox" class='checkbox-input'>
    <div class='checkbox-check'>
      <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><defs><circle id="a" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#D8D8D8" fill-opacity="0" xlink:href="#a"/><circle cx="15" cy="15" r="14" stroke="#FFF" stroke-width="2"/><path d="M8 8h14v14H8z"/><path fill="#FFF" stroke="#FFF" stroke-width=".5" d="M13.25 17.432L10.817 15l-.828.822 3.261 3.261 7-7-.822-.822z"/></g></svg>
    </div>
    <div class='checkbox-image'>
      <img :src='data.image' alt="">
    </div>
    <div class='checkbox-meta'>
      <div class="checkbox-name">{{ data.title }}</div>
      <div class="checkbox-description">
        {{ data.text }}
      </div>
    </div>
  </label>
</template>

<script>
export default {
  props: ['data'],
};
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .checkbox {
    display: block;
    width: 247px;
    height: 138px;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: grey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
    transition: all 200ms ease-out;

    &:hover {
      box-shadow: 0px 8px 10px 0 rgba(0, 0, 0, 0.07);
      .checkbox-name {
        top: 35%;
      }
      .checkbox-description {
        top: 50%;
        opacity: 1;
      }
    }

    &-input {
      display: none;
      &:checked ~ .checkbox-check {
        opacity: 1;
      }
    }

    &-check {
      position: absolute;
      top: 15px;
      right: 15px;
      left: auto;
      bottom: auto;
      opacity: 0;
      transition: all 200ms ease-out;
    }

    &-name {
      font-size: 14px;
      font-weight: 600;
      color: $white;
      position: absolute;
      top: 78%;
      left: 15px;
      z-index: 5;
      transition: all 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
      text-transform: uppercase;
    }

    &-description {
      font-size: 12px;
      font-weight: 500;
      color: $white;
      position: absolute;
      top: 100%;
      left: 15px;
      opacity: 0;
      transition: all 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
</style>


