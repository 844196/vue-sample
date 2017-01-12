<template lang="pug">
#schedules
  #a
    // schedule-list(v-model='schedules')
  #b
    schedule-card(v-model='schedule')
</template>

<script>
import ScheduleList from './../components/ScheduleList.vue'
import ScheduleCard from './../components/ScheduleCard.vue'

export default {
  name: 'schedules',
  data() {
    return {
      schedule: {at: '', name: '', wday: [1, 2, 3, 4, 5], once_only: false},
      schedules: [
        {at: '00:00', name: 'scheduleA', wday: [1, 2, 3, 4, 5], speech_text: 'abc', once_only: false},
        {at: '00:00', name: 'scheduleB', wday: [1, 2, 3, 4, 5], speech_text: 'abc', once_only: false},
        {at: '00:00', name: 'scheduleC', wday: [1, 2, 3, 4, 5], speech_text: 'abc', once_only: false},
      ]
    }
  },
  components: {
    ScheduleList,
    ScheduleCard
  }
}
</script>

<style lang="stylus" scoped>
#b
  padding: 16px
  max-width: 640px
  margin: 0 auto
</style>
