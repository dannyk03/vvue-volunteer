<template>
  <div class="vv-chat-list-wrap">
    <div class='vv-chat-list'>
      <div class='chat-search'>
        <div class='chat-search-input'>
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
          <input type="text" placeholder="Search by name">
        </div>
      </div>

      <div class='chat online'>
        <div class='chat-title'>Online</div>
        <ul class='chat-list'>
          <li class='chat-item' v-for='(item, index) in chatOnline' :key="index">
            <div class="chat-item-avatar-wrap" :class='{"is-active": item.online}'>
              <div class='chat-item-avatar'>
                <img :src="item.avatar" alt="">
              </div>
              <div class='status'></div>
            </div>
            <div class='chat-item-name'>{{ item.name }}</div>
          </li>
        </ul>
      </div>
      <div class='chat online'>
        <div class='chat-title'>Other</div>
        <ul class='chat-list'>
          <li class='chat-item' v-for='(item, index) in chatOnther' :key="index">
            <div class="chat-item-avatar-wrap" :class='{"is-active": item.online}'>
              <div class='chat-item-avatar'>
                <img :src="item.avatar" alt="">
              </div>
              <div class='status'></div>
            </div>
            <div class='chat-item-name'>{{ item.name }}</div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import VvSimpleCard from '@/shared/components/SimpleCard';

  export default {
    name: 'ChatList',
    components: {
      VvSimpleCard,
    },
    data() {
      return {
        chatOnline: [
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Maximilian',
            online: true,
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
            online: true,
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
            online: true,
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
            online: true,
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
            online: true,
          },
        ],
        chatOnther: [
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
          },
          {
            avatar: 'http://pastimesinc.com/wp-content/uploads/2013/03/hulk1-790x1024.jpg',
            name: 'Francis Gilbert',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/index";

  .vv-chat-list {
    height: 100vh;
    max-width: 217px;
    width: 100%;
    padding: 15px 0 72px;
    overflow-y: auto;

    &-wrap {
      background-color: $white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
      overflow: hidden;
      position: absolute;
      top: 0;
      right: -17px;
      left: auto;
      bottom: 0;
      z-index: 1;
    }
  }

  .chat {

    &.online {
      margin-bottom: 38px;
    }

    &-search {
      margin-bottom: 23px;
      padding-left: 15px;
      padding-right: 32px;

      &-input {
        position: relative;
      }
      .svg-icon {
        fill: $secondaryGrey;
        position: absolute;
        top: 10px;
        right: auto;
        left: 12px;
        bottom: 3px;
      }

      input {
        display: block;
        width: 100%;
        padding: 6px 8px 6px 35px;
        border: 1px solid $secondaryGrey;
        border-radius: 20px;
        font-size: 12px;
        outline: none;
      }
    }

    
    &-title {
      @include boldBodyFont;
      margin-bottom: 7px;
      padding: 0 20px;
      text-transform: uppercase;
    }

    &-item {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      transition: all 200ms ease-out;
      position: relative;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 177, 167, 0.06);
        &:before {
          opacity: 1;
        }
      }

      &:before {
        content: '';
        width: 3px;
        background-color: $secondary;
        position: absolute;
        top: 0;
        right: auto;
        left: 0;
        bottom: 0;
        opacity: 0;
        transition: all 200ms ease-out;
      }
    }
    &-item-avatar-wrap {
      position: relative;

      &.is-active {
        .status {
          display: block;
        }
      }

      .status {
        display: none;
        width: 11px;
        height: 11px;
        border: 2px solid $white;
        background-color: $blue;
        position: absolute;
        top: auto;
        right: 14px;
        left: auto;
        bottom: 0;
        border-radius: 50%;
      }
    }
    &-item-avatar {
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 15px;
      overflow: hidden;
      position: relative;
      img {
        align-self: center;
      }
    }
    &-item-name {
      font-size: 14px;
      line-height: 1.57;
      color: $primaryGrey;
    }
  }
</style>
