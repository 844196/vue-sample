<template lang="pug">
#schedule-card
  md-card
    md-card-header
      md-card-header-text
        div.md-title main
        div.md-subhead sub
      md-menu(md-size='4', md-direction='bottom left')
        md-button.md-icon-button(md-menu-trigger=('true'))
          md-icon more_vert
        md-menu-content
          md-menu-item
            span 削除
    md-card-content
      md-list.md-double-line
        md-list-item
          md-icon title
          .md-list-text-container
            md-input-container
              label スケジュール名
              md-input(v-model='value.name')
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
    md-card-actions
      md-button.md-raised.md-primary 更新
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
