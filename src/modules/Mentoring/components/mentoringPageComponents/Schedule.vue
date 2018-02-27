<template>
  <div class='vv-preparation'>
    <v-layout justify-space-between="true" align-center="true" class='header'>
      <div class='header-text'>
        Here you can schedule all of your eStart program appointments. Please postpone your sessions only in agreement with your mentee.
      </div>
      <button></button>
      <vv-base-button
        class="btn-add"
        color="accent">
        <div class="name">Add appointment</div>
        <svg class='svg-icon' fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </vv-base-button>
    </v-layout>
    <div class="content">
      <div class='content-title'>activity</div>
      <vv-linked-list class="steps" :list="steps">
        <div class="icon" slot="icon" slot-scope="{ item: { icon } }">
          <vv-base-icon :name="icon" width="12" height="12"  backgroundColor="white" />
        </div>
        <div class="text ml-3" slot="body" slot-scope="{ item }">
          <div class='content-date'>{{ item.date }}</div>
          <div class='content-state'>{{ item.state }}</div>
        </div>
      </vv-linked-list>
    </div>
  </div>
</template>
<script>
  import VvLinkedList from '@/shared/components/LinkedList';
  import VvBaseIcon from '@/shared/components/BaseIcon';
  import VvBaseButton from '@/shared/components/BaseButton';
  import '@/../static/icons/compiled-svg/airplane';

  export default {
    components: {
      VvLinkedList,
      VvBaseIcon,
      VvBaseButton
    },
    data() {
      return {
        steps: [
          {
            icon: 'airplane',
            date: 'Wed 27 Jan 2018 • 10:00',
            state: 'Scheduled',
          },
          {
            icon: 'airplane',
            date: 'Wed 27 Jan 2018 • 10:00',
            state: 'Apointment set to hangup',
          },
          {
            icon: 'airplane',
            date: 'Wed 27 Jan 2018 • 10:00',
            state: 'Done',
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

    &-text {
      max-width: 305px;
      font-size: 14px;
      line-height: 1.57;
      color: $primaryGrey;
    }
  }

  .content {
    flex-direction: column;

    &-title {
      @include calloutFont;
      margin-bottom: 35px;
    }
    .icon {
      width: 30px;
      height: 30px;
      background-color: $secondary;
      border-radius: 100%;
    }

    &-time {
      @include boldBodyFont;
    }

    &-state {
      @include captionFont;
    }
  }
</style>


