<template lang="pug">
#schedule-card
  md-card
    md-card-header
      md-card-header-text
        div.md-title MainTitle
        div.md-subhead SubTitle
      slot(name='menu')
    md-card-content
      md-list.md-double-line
        md-list-item
          md-icon subject
          .md-list-text-container
            md-input-container
              label スケジュール名
              md-input(v-model='value.name')
        md-list-item
          md-icon speaker_notes
          .md-list-text-container
            md-input-container
              label 発話内容
              md-input(v-model='value.speech_text')
        md-list-item
          md-icon schedule
          .md-list-text-container
            md-input-container
              label 時刻
              md-input(v-model='value.at')
        md-list-item
          md-icon date_range
          .md-list-text-container
            wday-selector(v-model='value.wday')
        md-list-item
          md-icon sync_disabled
          .md-list-text-container
            md-checkbox(v-model='value.once_only') 1回限り
    slot(name='actions')
</template>

<script>
import WdaySelector from './../components/WdaySelector.vue'

export default {
  name: 'schedule-card',
  props: {
    value: Object
  },
  components: {
    WdaySelector
  }
}
</script>
