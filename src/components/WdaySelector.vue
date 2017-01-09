<template lang="pug">
div.wday-selector
  md-button(:class='{ "wday-active" : this.isExists(0) }', @click='toggle(0)') 日
  md-button(:class='{ "wday-active" : this.isExists(1) }', @click='toggle(1)') 月
  md-button(:class='{ "wday-active" : this.isExists(2) }', @click='toggle(2)') 火
  md-button(:class='{ "wday-active" : this.isExists(3) }', @click='toggle(3)') 水
  md-button(:class='{ "wday-active" : this.isExists(4) }', @click='toggle(4)') 木
  md-button(:class='{ "wday-active" : this.isExists(5) }', @click='toggle(5)') 金
  md-button(:class='{ "wday-active" : this.isExists(6) }', @click='toggle(6)') 土
</template>

<script>
export default {
  name: 'wday-selector',
  props: {
    value: Array
  },
  methods: {
    isExists: function (wday) {
      return (this.value.indexOf(wday) >= 0)
    },
    toggle: function (wday) {
      if (this.isExists(wday)) {
        this.value.splice(this.value.indexOf(wday), 1);
      } else {
        this.value.push(wday)
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.md-button
  color: rgba(0, 0, 0, .54)
  border-radius: 0
  min-width: 0
  margin-left: 0
  margin-right: 0
  padding-left: 12px
  padding-right: 12px
  &.wday-active
    color: rgba(255, 255, 255, .87)
    background-color: #e91e63
    &:hover
      color: rgba(255, 255, 255, .87)
      background-color: #e91e63
    &:after
      width: 1px
      position: absolute
      top: 0
      bottom: 0
      left: 0
      content: ' '
      background-color: rgba(0, 0, 0, .12)
</style>
