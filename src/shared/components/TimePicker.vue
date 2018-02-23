<template>
  <v-dialog v-model="toggle" max-width="367" :persistent='true'>
    <v-card class='card'>
      <div class='card-title'>{{ day }}</div>
      <div class="card-subtitle">Please set the time you are available on {{ day }}.</div>
      <div class="timepicker-time">8:00 - 23:30</div>

      <!-- TODO: create a new component for timepicker -->
      <ul class='timepicker'>
        <li class='timepicker-item' 
          v-for='(time, index) in 24' 
          :key='index'
          :data-time='index'
          @click='toggleTime'>08:00</li>
      </ul>

      <div class="card-hint">Hold shift to select multiple time slots.</div>
      <div class="card-actions">
        <button>Clear All</button>
        <div>
          <button class='btn' @click='cancel'>Cancel</button>
          <button class='btn' @click='setTime'>Set</button>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        day: '_DAY_',
      }
    },
    computed: {
      ...mapGetters('mentoring', {
        toggle: 'getTimePicker',
      }),
    },
    methods: {
      cancel() {
        this.$store.commit('mentoring/toggleTimePicker', false);
      },
      setTime() {
        this.$store.commit('mentoring/toggleTimePicker', false);
      },
      toggleTime(event) {
        const el = event.target;

        if (el.classList.contains('is-active')) {
          el.classList.remove('is-active');
        } else {
          el.classList.add('is-active');
          console.log(el.dataset.time);
        }
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
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;

    &-time {
      margin-bottom: 22px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      text-align: center;
      color: $primaryDark;
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

</style>


