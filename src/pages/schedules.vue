<template lang="pug">
#schedules
  #sidenav
    md-sidenav.main-sidebar.md-left
      md-list.md-double-line
        schedule-list(v-model='schedules')
  #main-view
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

<style lang="stylus">
#sidenav
  .md-sidenav.main-sidebar
    .md-sidenav-content
      width: 280px
      display: flex
      flex-flow: column
      top: initial
      bottom: initial
      height: calc(100% - 128px)
      @media (min-width: 961px)
        transform: translate3d(0, 0, 0)
        box-shadow: 0 1px 5px rgba(0,0,0,.2),
                    0 2px 2px rgba(0,0,0,.14),
                    0 3px 1px -2px rgba(0,0,0,.12)
        pointer-events: auto

#main-view
  padding: 16px
  min-width: 100%
  display: flex
  flex-flow: column nowrap
  flex: 1
  margin: 0 auto
  @media (min-width: 961px)
    padding-left: 296px
</style>
