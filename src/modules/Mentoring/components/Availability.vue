<template>
  <div>
    <h1 class='mentoring-title heading'>my <span class='accented'>availability</span></h1>
    <p class='start-subtitle page-subtitle'>Please set appropriate weekdays and time for you to make appointments.</p>

    
    <vv-availability-days></vv-availability-days>
  </div>
</template>
<script>
  import VvAvailabilityDays from './AvailabilityDays'

  export default {
    components: {
      VvAvailabilityDays
    }    
  }
</script>
<style lang="scss" scoped>

</style>

