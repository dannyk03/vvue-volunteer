<template>
  <div class='radio-wrap'>
    <div class="radio"> 
      <input type="radio" :id='name + "_first"' class='radio-input' :name='name'>
      <label class='radio-label' :for="name + '_first'">
        <div class='radio-check'>
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><defs><circle id="a" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#D8D8D8" fill-opacity="0" xlink:href="#a"/><circle cx="15" cy="15" r="14" stroke="#FFF" stroke-width="2"/><path d="M8 8h14v14H8z"/><path fill="#FFF" stroke="#FFF" stroke-width=".5" d="M13.25 17.432L10.817 15l-.828.822 3.261 3.261 7-7-.822-.822z"/></g></svg>
        </div>
        <div class='radio-image'>
          <img src="https://images.unsplash.com/photo-1519033285472-99145631eaab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05c36d7e44c7196fc03ad515b929fd8b&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="">
        </div>
        <div class="radio-description">
          I am a bit late and I am running to the train
        </div>
      </label>
    </div>
    <div class='radio-text'>or</div>
    <div class="radio"> 
      <input type="radio" :id='name + "_second"' class='radio-input' :name='name'>
      <label class='radio-label' :for='name + "_second"'>
        <div class='radio-check'>
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30"><defs><circle id="a" cx="15" cy="15" r="15"/></defs><g fill="none" fill-rule="evenodd"><use fill="#D8D8D8" fill-opacity="0" xlink:href="#a"/><circle cx="15" cy="15" r="14" stroke="#FFF" stroke-width="2"/><path d="M8 8h14v14H8z"/><path fill="#FFF" stroke="#FFF" stroke-width=".5" d="M13.25 17.432L10.817 15l-.828.822 3.261 3.261 7-7-.822-.822z"/></g></svg>
        </div>
        <div class='radio-image'>
          <img src="https://images.unsplash.com/photo-1519033285472-99145631eaab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05c36d7e44c7196fc03ad515b929fd8b&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" alt="">
        </div>
        <div class="radio-description">
          I am a bit late and I am running to the train
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/index";

  .radio {

    &-wrap {
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-text {
      margin: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-align: center;
      text-transform: uppercase;
      color: $primaryGrey;
    }

    &-input {
      display: none;

      &:checked ~ .radio-label {
        box-shadow: 0px 8px 10px 0 rgba(0, 0, 0, 0.07);
        .radio-check {
          opacity: 1;
        }
      }
    }

    &-label {
      display: block;
      max-width: 247px;
      width: 100%;
      position: relative;
      width: 247px;
      border-radius: 3px;
      background-color: $white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
      cursor: pointer;
      transition: all 200ms ease-out;
    }

    &-check {
      position: absolute;
      top: 20px;
      right: 20px;
      left: auto;
      bottom: auto;
      opacity: 0;
      transition: all 200ms ease-out;
    }

    &-image {
      display: flex;
      justify-content: center;
      max-height: 138px;
      overflow: hidden; 
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;

      img {
        align-self: center;
      }
    }

    &-description {
      padding: 20px;
    }
  }
</style>


