<template>
  <v-dialog v-model="timepicker.toggle" max-width="367" :persistent='true'>
    <v-card class='card'>
      <div class='card-title'>{{ timepicker.data.day }}</div>
      <div class="card-subtitle">Please set the time you are available on {{ timepicker.data.day }}.</div>

      <v-carousel 
        :hide-delimiters='true' 
        :cycle='false' 
        class='timepicker-carousel'>
        <v-carousel-item v-for='(data, index) in timepickerTimes' :key='index'>
          <div class="timepicker-time">{{ data.time_range}}</div>
          <ul ref='timepicker' class='timepicker-list'>
            <li class='timepicker-item'
                v-for='(time, index) in data.times'
                :key='index'
                :data-time='time'
                @click='selectTime'>
                {{ time }}
            </li>
          </ul>
        </v-carousel-item>
      </v-carousel>

      <div class="card-hint">Hold shift to select multiple time slots.</div>
      <div class="card-actions">
        <button class='clear' @click='clearTime'>Clear All</button>
        <div>
          <button class='button -empty' @click='cancel'>Cancel</button>
          <button class='button -fill' @click='setTime'>Set</button>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import _ from 'lodash';
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        timepickerTimes: [
          {
            time_range: '08:00 - 20:00',
            times: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',],  
          },
          {
            time_range: '20:00 - 23:30',
            times: ['20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'],
          },
        ],
        selectedTime: [],
      }
    },
    computed: {
      ...mapGetters('mentoring', {
        timepicker: 'getTimePicker',
      }),
    },
    methods: {
      cancel() {
        this.$store.commit('mentoring/closeTimePicker', false);
      },
      setTime() {
        if (this.selectedTime.length === 0) {
          return;
        };

        const data = {
          year: this.timepicker.data.year,
          month: this.timepicker.data.month,
          days: [
            {
              day: this.timepicker.data.day,
              times: this.selectedTime,
            }
          ]
        };
        
        this.$store.commit('mentoring/setTimePickerData', data);
        this.$store.commit('mentoring/closeTimePicker', false);
      },
      selectTime(event) {
        const el = event.target;

        if (el.classList.contains('is-active')) {
          el.classList.remove('is-active');
        } else {
          el.classList.add('is-active');
          this.selectedTime.push(el.dataset.time);
        }
      },
      clearTime() {
        // const times = document.querySelectorAll('.timepicker li');
        const times = this.$refs.timepicker.querySelectorAll('li');

        console.log(times);

        // this.selectedTime = [];

        // _.each(times, function(el) {
        //   if (el.classList.contains('is-active')) {
        //     el.classList.remove('is-active');
        //   }
        // });

        // console.log(this.timepicker);
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .card {
    padding: 30px 30px 20px;

    &-title {
      margin-bottom: 7px;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.2px;
      text-align: left;
      color: $primaryDark;
    }
    &-subtitle {
      margin-bottom: 35px;
      font-size: 17px;
      line-height: 1.41;
      text-align: left;
      color: $primaryGrey;
    }

    &-hint {
      margin-bottom: 35px;
      font-size: 12px;
      color: $primaryGrey;
    }

    &-actions {
      display: flex;
      justify-content: space-between;
    }
  }

  .timepicker {
    &-carousel {
      height: 214px;
      margin-bottom: 15px;
      box-shadow: none;
    }

    &-time {
      margin-bottom: 22px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      text-align: center;
      color: $primaryDark;
    }

    &-list {
      flex-wrap: wrap;
      display: flex;
    }

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16.66%;
      height: 42px;
      border: 1px solid $secondaryGrey;
      transition: all 200 ease-out;
      cursor: pointer;
      user-select: none;
      transition: all 200 ease-out;

      &:hover {
        background-color: $background;
      }

      &.is-active {
        background-color: $secondary;
        color: $white;
      }
    }
  }

  .clear {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-align: center;
    color: $primaryGrey;
    text-transform: uppercase;
  }

  .button.-fill {
    margin-left: 15px;
  }

</style>


