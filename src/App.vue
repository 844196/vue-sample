<template lang="pug">
#app
  md-toolbar.md-medium
    .md-toolbar-container
      h1.md-title Shizushizu
    .md-toolbar-container
      .page-navbar
        router-link(to='/speech', tag='md-button') Speech
        router-link(to='/schedules', tag='md-button') Schedules
  main
    router-view
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="stylus" scoped>
.page-navbar
  margin-left: 8px
  .md-button
    color: rgba(255, 255, 255, .54)
    border-radius: 0
    margin-left: 0
    margin-right: 0
    &.router-link-active
      color: rgba(255, 255, 255, .87)
      border-bottom: 1px solid currentColor
</style>
