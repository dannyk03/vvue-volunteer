<template>
  <div>
    <v-carousel 
      :hide-delimiters='true' 
      :cycle='false' 
      class='calendar'>
      <v-carousel-item v-for='(month, index) in calendar' :key='index'>
        <div class='calendar-title'>{{ month.title }}</div>
        <ul class='days-list'>
          <li class='days-item' v-for='(day, index) in days' :key='index'>
            <div class='days-name'>{{ day }}</div>
            <div class='days-circle' @click='chooseTime(day, month)'>
              <svg class='svg-icon' xmlns="http://www.w3.org/2000/svg" width='11' height='8' viewBox="0 0 11.7 9.1"><path d="M3.8 7L1.2 4.4l-.8.8 3.5 3.5 7.5-7.5-.9-.9L3.8 7z" fill="#fff" stroke="#fff" stroke-width=".5"/></svg>
            </div>
            <ul class='days-time-list'>
              <li class='days-time-item'>08:00</li>
            </ul>
          </li>
        </ul>
      </v-carousel-item>
    </v-carousel>

    <vv-time-picker></vv-time-picker>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';

  import VvTimePicker from '@/shared/components/TimePicker';

  export default {
    name: 'AvailabilityCalendar',
    components: {
      VvTimePicker,
    },
    data() {
      return {
        dialog: false,
        months: ['January', 'February', 'March', 'April', ' May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days: ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'],
        calendar: null,
      };
    },
    computed: {
      ...mapGetters('mentoring', {
        times: 'getTimes',
      }),
    },
    methods: {
      chooseTime(day, data) {
        const timeData = data;
        timeData.day = day;

        this.$store.commit('mentoring/openTimePicker', { timeData, toggle: true });
        console.log(timeData, this.times);
      },
      setCalendar() {
        const currentYearMonths = [];
        const nextYearMonths = [];

        const date = new Date();
        const currentYear = +date.getFullYear();
        const currentMonth = date.getMonth();

        for (let i = 0; i < 12; i += 1) {
          if (i >= currentMonth) {
            currentYearMonths.push({
              title: `${this.months[i]} ${currentYear}`,
              year: currentYear,
              month: this.months[i],
            });
          } else {
            nextYearMonths.push({
              title: `${this.months[i]} ${currentYear + 1}`,
              year: currentYear + 1,
              month: this.months[i],
            });
          }
        }

        this.calendar = [...currentYearMonths, ...nextYearMonths];
      },
    },
    created() {
      this.setCalendar();
    },
  };
</script>
<style lang="scss" scoped>
  @import "~@/styles/index";

  .calendar {
    height: auto;
    margin-bottom: 120px;
    box-shadow: none;
    
    &-title {
      margin-bottom: 40px;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.2px;
      text-align: center;
      color: $primaryDark;
    }
  }

  .days {
    &-list {
      display: flex;
      justify-content: center;
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 18px;
    }

    &-name {
      margin-bottom: 20px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      color: $primaryGrey;
      text-align: center;
      text-transform: uppercase;
    }
    
    &-circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      margin-bottom: 20px;
      border-radius: 50%;
      border: 2px solid $secondaryGrey;
      background-color: transparent;
      cursor: pointer;

      &.is-active {
        background-color: $secondary;
        border-color: $secondary;
        .svg-icon {
          opacity: 1;  
        }
      }

      .svg-icon {
        opacity: 0;
        transition: all 200ms ease-out;
      }
    }

    &-time-item {
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.67;
      text-align: center;
      color: $primaryDark;
    }
  }
</style>


