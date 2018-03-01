<template>
  <div class='vv-schedule'>
    <v-layout class='header' justify-space-between align-center >
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
      <ul class="vv-linked-list steps">
        <li class='item' v-for='(item, index) in schedule.steps' :key='index'>
          <!-- Icons -->
          <div v-if='item.type === "schedule"' class="item-image">
            <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#8FCED7"/><path fill="#FFF" d="M18.056 15.6H15v3h3.056v-3zM17.444 9v1.2h-4.888V9h-1.223v1.2h-.61c-.68 0-1.217.54-1.217 1.2L9.5 19.8c0 .66.544 1.2 1.222 1.2h8.556c.672 0 1.222-.54 1.222-1.2v-8.4c0-.66-.55-1.2-1.222-1.2h-.611V9h-1.223zm1.834 10.8h-8.556v-6.6h8.556v6.6z"/><path d="M7 7h16v16H7z"/></g></svg>
          </div>
          <div v-if='item.type === "cancel"' class="item-image">
            <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#E7695D"/><path fill="#FFF" d="M19.667 11.273l-.94-.94L15 14.06l-3.727-3.727-.94.94L14.06 15l-3.727 3.727.94.94L15 15.94l3.727 3.727.94-.94L15.94 15z"/><path d="M7 7h16v16H7z"/></g></svg>
          </div>
          <div v-if='item.type === "done"' class="item-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#8FCED7"/><path d="M7 7h16v16H7z"/><path fill="#FFF" stroke="#FFF" stroke-width=".5" d="M13 17.78L10.22 15l-.947.94L13 19.667l8-8-.94-.94z"/></g></svg>
          </div>
          <div v-if='item.type === "hold"' class="item-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><g fill="none" fill-rule="evenodd"><circle cx="15" cy="15" r="15" fill="#FAD46F"/><path fill="#FFF" d="M11 8.333v4h.007L11 12.34 13.667 15 11 17.667l.007.006H11v3.994h8v-3.994h-.007l.007-.006L16.333 15 19 12.34l-.007-.007H19v-4h-8zM17.667 18v2.333h-5.334V18L15 15.333 17.667 18zM15 14.667L12.333 12V9.667h5.334V12L15 14.667z"/><path d="M7 7h16v16H7z"/></g></svg>
          </div>
          <!-- Date/Actions -->
          <v-layout justify-space-between align-center>
            <div>
              <div class="steps-title" >{{ item.title }}</div>
              <div class="steps-subtitle">{{ item.subtitle }}</div>
            </div>

            <v-layout v-if='item.type === "schedule"' class='steps-actions' justify-end align-center>
              <div class='postpone'>Postpone</div>
              <div class='actions'>
                <v-tooltip content-class="customTooltip bottom schedule" top>
                  <button slot="activator" @click='openDatepicker'>
                    <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g fill="none" fill-rule="evenodd"><path fill="#6C6C72" d="M11.056 8.6H8v3h3.056v-3zM10.444 2v1.2H5.556V2H4.333v1.2h-.61c-.68 0-1.217.54-1.217 1.2L2.5 12.8c0 .66.544 1.2 1.222 1.2h8.556c.672 0 1.222-.54 1.222-1.2V4.4c0-.66-.55-1.2-1.222-1.2h-.611V2h-1.223zm1.834 10.8H3.722V6.2h8.556v6.6z"/><path d="M0 0h16v16H0z"/></g></svg>
                  </button>
                  <span>Outlook meeting</span>
                </v-tooltip>
                <button>
                  <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="#E7695D" d="M12.667 4.273l-.94-.94L8 7.06 4.273 3.333l-.94.94L7.06 8l-3.727 3.727.94.94L8 8.94l3.727 3.727.94-.94L8.94 8z"/></g></svg>
                </button>
              </div>
            </v-layout>
            <div v-else class='steps-time'>{{ item.passed }}</div>
          </v-layout>
        </li>
      </ul>
    </div>


    <!-- TODO: create new component for Modal -->
    <v-dialog v-model="showDatepicker" max-width="678">
      <vv-simple-card class='card'>
        <v-layout >
          <router-link :to="{ name: 'startDefault' }" tag='button' class='modal-close' @click.native="dialog = false">
            <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width='10' height='10' viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
          </router-link>
          <div class="datepicker">
            <h1>Datepicker</h1>
          </div>
          <div class="timepicker">
            <h1>Timepicker</h1>
          </div>
        </v-layout>
      </vv-simple-card>
    </v-dialog>
  </div>
</template>
<script>
  import axios from 'axios';

  import VvLinkedList from '@/shared/components/LinkedList';
  import VvBaseIcon from '@/shared/components/BaseIcon';
  import VvBaseButton from '@/shared/components/BaseButton';
  import VvTimePicker from '@/shared/components/TimePicker';
  import VvSimpleCard from '@/shared/components/SimpleCard';
  import '@/../static/icons/compiled-svg/airplane';

  export default {
    name: 'Schedule',
    components: {
      VvLinkedList,
      VvBaseIcon,
      VvBaseButton,
    },
    props: {
      schedule: Object,
    },
    data() {
      return {
        activitySteps: [],
        showDatepicker: false,
      };
    },
    methods: {
      openDatepicker() {
        console.log('open');
        this.showDatepicker = true;
      },
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

    &-passed {
      font-size: 12px;
      color: $secondaryGrey;
    }
  }

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .steps {
    &-title {
      @include boldBodyFont;
      position: relative;
      top: -3px;
    }

    &-subtitle {
      font-size: 12px;
      color: $primaryGrey;
    }

    &-time {
      font-size: 12px;
      text-align: right;
      color: $secondaryGrey;
    }

    .postpone {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-align: center;
      color: #00b1a7;
      text-transform: uppercase;
      position: relative;
      top: -3px;
    }

    .actions {
      margin-left: 26px;
    }
  }

  .vv-linked-list {
    width: 100%;
    list-style: none;
    
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

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

  .modal {
    padding: 30px;
    border-radius: 3px;
    background-color: $white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
    position: relative;

    &-close {
      padding: 8px;
      position: absolute;
      top: 0;
      right: 8px;
      outline: none;
    }
  }
</style>


