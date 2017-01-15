<template lang="pug">
#app
  md-whiteframe
    md-toolbar.md-medium
      .md-toolbar-container
        h1.md-title Shizushizu
      .md-toolbar-container.page-navbar
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

<style lang="stylus">
body
  background-color: #f7f7f7 !important
</style>

<style lang="stylus" scoped>
.md-toolbar-container.page-navbar
  align-items: flex-end
  height: 40px
  margin-left: 8px
  .md-button
    font-size: 15px
    color: rgba(255, 255, 255, .54)
    border-radius: 0
    margin: 0
    padding-bottom: 3px
    &.router-link-active
      color: rgba(255, 255, 255, .87)
      padding-bottom: 0
      border-bottom: 3px solid currentColor
</style>
