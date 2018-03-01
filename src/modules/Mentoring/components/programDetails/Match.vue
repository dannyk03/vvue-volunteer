<template>
  <div class="vv-mentoring-match mt-3">
    <vv-avatar :src="match.user.avatar" size="110" />
    <h1 class="display-1 heading accented mt-3">{{match.user.name}}</h1>
    <span class="role mt-1">{{ match.user.role}}</span>

    <!-- <vv-linked-list class="steps" :list="match.steps">
      <div class="icon" slot="icon" slot-scope="{ item: { icon } }">
        <vv-icon :name="icon" width="12" height="12"  backgroundColor="white" />
      </div>

      <div class="text ml-3" slot="body" slot-scope="{ item }">{{item.text}}</div>
    </vv-linked-list> -->

    <!-- TODO: refactoring this code -->
    <ul class="vv-linked-list steps">
      <li class="item" v-for="(item, index) in match.steps" :key='index'>
        <div v-if='item.type === "schedule"' class="item-image">
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#8FCED7"/><path fill="#FFF" d="M18.056 15.6H15v3h3.056v-3zM17.444 9v1.2h-4.888V9h-1.223v1.2h-.61c-.68 0-1.217.54-1.217 1.2L9.5 19.8c0 .66.544 1.2 1.222 1.2h8.556c.672 0 1.222-.54 1.222-1.2v-8.4c0-.66-.55-1.2-1.222-1.2h-.611V9h-1.223zm1.834 10.8h-8.556v-6.6h8.556v6.6z"/><path d="M7 7h16v16H7z"/></g></svg>
        </div>
        <div v-if='item.type === "check"' class="item-image">
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#8FCED7"/><path d="M7 7h16v16H7z"/><path fill="#FFF" d="M15 16.333a1.992 1.992 0 0 0 1.993-2l.007-4c0-1.106-.893-2-2-2s-2 .894-2 2v4c0 1.107.893 2 2 2zm3.533-2c0 2-1.693 3.4-3.533 3.4-1.84 0-3.533-1.4-3.533-3.4h-1.134c0 2.274 1.814 4.154 4 4.48V21h1.334v-2.187c2.186-.32 4-2.2 4-4.48h-1.134z"/></g></svg>
        </div>
        <div v-if='item.type === "download"' class="item-image">
          <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#E0E0E0"/><path d="M7 7h16v16H7z"/><path fill="#FFF" d="M19.667 13H17V9h-4v4h-2.667L15 17.667 19.667 13zm-9.334 7.2v1h9.334v-1h-9.334z"/></g></svg>
        </div>
         <div class="steps-title" >{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import VvAvatar from '@/shared/components/Avatar';
  import VvIcon from '@/shared/components/BaseIcon';
  import VvLinkedList from '@/shared/components/LinkedList';
  import '@/../static/icons/compiled-svg/airplane';

  export default {
    name: 'MentoringMatch',
    components: {
      VvAvatar,
      VvLinkedList,
      VvIcon,
    },
    props: {
      match: Object,
    },
    data() {
      return {

      };
    },
    created() {
      console.log(this.match);
    },
  };
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/styles/index';

  .vv-mentoring-match {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .role {
    @include calloutSubheaderFont;
    margin-bottom: 44px;
  }

  .steps {
    max-width: 350px;
    margin: 0 auto;

    // .icon {
    //   width: 30px;
    //   height: 30px;
    //   background-color: $secondary;
    //   border-radius: 100%;
    // }

    &-title {
      @include boldBodyFont;
      position: relative;
      top: -3px;
    }
  }

  
  .vv-linked-list {
    width: 100%;
    list-style: none;
    
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 48px;

      .item-image {
        margin-right: 16px;
      }

      &:not(:last-child) {
        .item-image {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            height: 30px;
            width: 1px;
            background-color: #E0E0E0;
            bottom: -115%;
            left: 50%;
          }
        }
      }
    }
  }
</style>
