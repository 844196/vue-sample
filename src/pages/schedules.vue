<template lang="pug">
#schedules
  md-list
    md-list-item
      md-icon schedule
      .md-list-text-container
        md-input-container
          label 時刻
          md-input(v-model='at')
    md-list-item
      md-icon date_range
      .md-list-text-container
        wday-selector(v-model='wdays')
</template>

<script>
import WdaySelector from './../components/WdaySelector.vue'

export default {
  name: 'schedules',
  data() {
    return {
      at: '',
      wdays: [1, 2, 3, 4, 5]
    }
  },
  components: {
    WdaySelector
  }
}
</script>
