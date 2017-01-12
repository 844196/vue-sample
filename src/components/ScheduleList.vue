<template lang="pug">
#schedule-list
  md-list-item(v-for='schedule in value')
    md-icon event
    .md-list-text-container
      span {{ schedule.at }} - {{ schedule.name }}
      span {{ schedule.speech_text }}
</template>

<script>
export default {
  name: 'schedule-list',
  props: {
    value: Array
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
#schedule-list
  .md-list
    background-color: #efefef
</style>
