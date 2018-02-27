<template>
  <div class='vv-preparation'>
    <v-layout  class='header'>
      <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="66" height="66"><g fill="none" fill-rule="evenodd"><circle cx="32.674" cy="32.837" r="32.593" fill="#F3FAFB" fill-rule="nonzero"/><g transform="translate(6.519 13.037)"><ellipse cx="16.052" cy="40.17" fill="#45413C" fill-rule="nonzero" opacity=".15" rx="11.407" ry="1.222"/><path fill="#FFF5E3" fill-rule="nonzero" d="M23.63 39.681c-1.956 0-3.586-1.63-3.586-3.585V16.378c0-1.956-1.63-3.585-3.585-3.585H3.911c1.956 0 3.585 1.63 3.585 3.585v19.718c0 1.956 1.63 3.585 3.585 3.585H23.63z"/><path fill="#F7E5C6" fill-rule="nonzero" stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M7.496 16.378c0-1.956-1.63-3.585-3.585-3.585S.326 14.423.326 16.378v4.155c0 .49.326.815.815.815h6.355v-4.97z"/><path fill="#FFF" fill-rule="nonzero" d="M5.704 12.793h10.755c1.467 0 2.77.896 3.341 2.281H7.252c-.326-.733-.815-1.385-1.548-1.711v-.57z"/><path stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M23.63 39.681c-1.956 0-3.586-1.63-3.586-3.585V16.378c0-1.956-1.63-3.585-3.585-3.585H3.911c1.956 0 3.585 1.63 3.585 3.585v19.718c0 1.956 1.63 3.585 3.585 3.585H23.63z"/><path fill="#FFF" fill-rule="nonzero" stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M23.63 39.681c2.118 0 3.748-1.792 3.585-3.91-.163-1.875-1.874-3.26-3.748-3.26H13.444a.403.403 0 0 0-.244.733c.896.652 1.385 1.712 1.385 2.852 0 1.956-1.63 3.585-3.585 3.585h12.63z"/><path stroke="#45413C" stroke-linecap="round" stroke-linejoin="round" stroke-width=".815" d="M17.356 18.17h-6.682m6.682 2.69h-6.682m5.541 2.688H12.63m3.585 2.689h-2.69"/><path fill="#525252" fill-rule="nonzero" d="M27.785 21.919l-3.748-3.83 3.178-4.4 5.052 5.052z"/><path fill="#656769" fill-rule="nonzero" d="M27.215 13.689l-3.178 4.4 2.119 2.2 3.83-3.83z"/><path fill="#525252" fill-rule="nonzero" d="M32.267 18.74l-5.052-5.051 14.34-12.63c1.06-.896 2.608-.896 3.586.082.978.978.978 2.607.081 3.585L32.267 18.74z"/><path fill="#656769" fill-rule="nonzero" d="M45.06 1.14c-.979-.977-2.527-.977-3.586-.08l-14.34 12.629 2.851 2.852L45.222 1.304c-.081-.082-.081-.163-.163-.163z"/><path fill="#FFE500" fill-rule="nonzero" d="M23.222 26.889c-.489.57-1.14.978-1.955.978-1.223 0-3.015.163-4.237.977.814-1.222.977-3.014.977-4.237 0-.733.408-1.466.978-1.955l4.074-3.015 3.178 3.178-3.015 4.074z"/><path fill="#FFF48C" fill-rule="nonzero" d="M23.06 19.637l-4.075 3.015c-.57.489-.978 1.14-.978 1.955 0 1.223-.163 3.015-.977 4.237l7.577-7.577-1.548-1.63z"/><path fill="#FFE500" fill-rule="nonzero" stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M26.237 22.815l-3.178-3.178.978-1.548 3.748 3.83z"/><path stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M23.222 26.889c-.489.57-1.14.978-1.955.978-1.223 0-3.015.163-4.237.977.814-1.222.977-3.014.977-4.237 0-.733.408-1.466.978-1.955l4.074-3.015 3.178 3.178-3.015 4.074zm4.563-4.97l-3.748-3.83 3.178-4.4 5.052 5.052z"/><circle cx="21.2" cy="24.731" r="1" stroke="#45413C" stroke-linejoin="round" stroke-width=".815" transform="rotate(-45 21.2 24.731)"/><path stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M20.533 25.34l-3.177 3.179"/><path stroke="#45413C" stroke-linecap="round" stroke-linejoin="round" stroke-width=".815" d="M44.081 5.867l.57.57c.653.652.734 1.793.082 2.444l-5.459 6.03"/><path fill="#FFE500" fill-rule="nonzero" stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M28.519 12.467l-1.304 1.222 5.052 5.052 1.222-1.304z"/><path stroke="#45413C" stroke-linejoin="round" stroke-width=".815" d="M32.267 18.74l-5.052-5.051 14.34-12.63c1.06-.896 2.608-.896 3.586.082.978.978.978 2.607.081 3.585L32.267 18.74z"/></g></g></svg>
      <div class='header-text'>
        In this section you can find anything you need to prepare yourself for all your sessions. Choose the lection to find the documents needed.
      </div>
    </v-layout>
    <div class="content">
      <vv-linked-list class="steps" :list="steps">
        <div class="icon" slot="icon" slot-scope="{ item: { icon } }">
          <vv-icon :name="icon" width="12" height="12"  backgroundColor="white" />
        </div>
        <div class="text ml-3" slot="body" slot-scope="{ item }">
          <div class='content-title'>{{ item.text }}</div>
          <div class='content-subtitle'>{{ item.subtext }}</div>
        </div>
      </vv-linked-list>
    </div>
  </div>
</template>
<script>
  import VvLinkedList from '@/shared/components/LinkedList';
  import VvIcon from '@/shared/components/BaseIcon';
  import '@/../static/icons/compiled-svg/airplane';

  export default {
    components: {
      VvLinkedList,
      VvIcon,
    },
    data() {
      return {
        steps: [
          {
            icon: 'airplane',
            text: 'General documents Online Student Mentoring',
            subtext: 'General information',
          },
          {
            icon: 'airplane',
            text: 'Documents Session',
            subtext: 'Personal goals',
          },
          {
            icon: 'airplane',
            text: 'Documents Session',
            subtext: 'Personal goals',
          },
          {
            icon: 'airplane',
            text: 'Documents Session',
            subtext: 'Personal goals',
          },
          {
            icon: 'airplane',
            text: 'Documents Session',
            subtext: 'Personal goals',
          },
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import '~@/styles/index';

  .header {
    margin-bottom: 25px;
    padding-bottom: 20px;
    position: relative;

    &:after {
      content: '';
      display: block;
      height: 1px;
      width: calc(100% + 40px);
      background-color: $tertiaryGrey;
      position: absolute;
      top: auto;
      right: 0;
      left: -20px;
      bottom: 0;
    }
    
    .svg-icon {
      display: block;
      min-width: 66px;
    }

    &-text {
      max-width: 354px;
      margin-left: 20px;
      font-size: 14px;
      line-height: 1.57;
      color: $primaryGrey;
    }
  }

  .content {
    .icon {
      width: 30px;
      height: 30px;
      background-color: $secondary;
      border-radius: 100%;
    }

    &-title {
      @include boldBodyFont;
    }

    &-subtitle {
      @include captionFont;
    }
  }
</style>


