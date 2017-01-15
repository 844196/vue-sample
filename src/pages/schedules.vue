<template lang="pug">
#schedules
  #sidenav
    md-sidenav.main-sidebar.md-left
      md-list.md-double-line
        md-list-item(@click='edit(scheduleSkeleton)')
          md-icon add_circle
          span Add schedule
          md-divider
        md-list-item(v-for='(schedule, id) in schedules', @click='edit(schedule)')
          md-icon {{ schedule.once_only ? 'event' : 'date_range' }}
          .md-list-text-container
            span.schedule-meta-info {{ schedule.at }} - {{ schedule.name }}
            span.schedule-speech-text {{ schedule.speech_text }}
  #mainview
    schedule-card(v-model='editingSchedule')
      div(slot='menu')
        md-menu(md-size='3', md-direction='bottom left')
          md-button.md-icon-button(md-menu-trigger='true')
            md-icon more_vert
          md-menu-content
            md-menu-item(@click='remove(editingSchedule)')
              span 削除
              md-icon delete
      div(slot='actions')
        md-card-actions
          md-button.md-raised.md-primary(@click='editingScheduleIsNew ? create(editingSchedule) : update(editingSchedule)')
            span {{ editingScheduleIsNew ? '作成' : '更新' }}
    md-dialog-alert(md-title='問題が発生しました', :md-content='errorMessage', md-ok-text='OK', ref='errorDialog')
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ScheduleCard from './../components/ScheduleCard.vue'

export default {
  name: 'schedules',
  computed: {
    scheduleSkeleton () {
      return this.$store.state.skeleton.schedule()
    },
    ...mapState({
      editingSchedule: 'editingSchedule',
      errorMessage: 'errorMessage'
    }),
    ...mapGetters({
      schedules: 'getSortedScheduleCollection',
      editingScheduleIsNew: 'editingScheduleIsNew'
    })
  },
  mounted () {
    this.$store.dispatch('fetchScheduleCollection')
      .catch(error => {
        this.$refs['errorDialog'].open()
      })
  },
  methods: {
    edit (schedule) {
      this.$store.dispatch('editSchedule', schedule)
    },
    create (schedule) {
      this.$store.dispatch('createSchedule', schedule)
        .then(response => {
          this.edit(this.scheduleSkeleton)
        })
        .catch(error => {
          this.$refs['errorDialog'].open()
        })
    },
    update (schedule) {
      this.$store.dispatch('updateSchedule', schedule)
        .then(response => {
          this.edit(this.scheduleSkeleton)
        })
        .catch(error => {
          this.$refs['errorDialog'].open()
        })
    },
    remove (schedule) {
      this.$store.dispatch('removeSchedule', schedule)
        .then(response => {
          this.edit(this.$store.getters.getSortedScheduleCollectionLast)
        })
        .catch(error => {
          this.$refs['errorDialog'].open()
        })
    }
  },
  components: {
    ScheduleCard
  }
}
</script>

<style lang="stylus">
.md-sidenav.main-sidebar
  .md-sidenav-content
    width: 280px
    display: flex
    flex-flow: column
    top: 105px
    bottom: initial
    height: calc(100% - 105px)
    @media (min-width: 961px)
      transform: translate3d(0, 0, 0)
      box-shadow: 0 1px 5px rgba(0,0,0,.2),
                  0 2px 2px rgba(0,0,0,.14),
                  0 3px 1px -2px rgba(0,0,0,.12)
      pointer-events: auto
</style>

<style lang="stylus" scoped>
#sidenav
  .schedule-meta-info, .schedule-speech-text
    width: 100%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    -webkit-text-overflow: ellipsis
    -o-text-overflow: ellipsis
#mainview
  padding: 16px
  min-width: 100%
  display: flex
  flex-flow: column nowrap
  flex: 1
  margin: 0 auto
  @media (min-width: 961px)
    padding-left: 296px
  #schedule-card
    width: 100%
    max-width: 720px
    margin: 0 auto
</style>
