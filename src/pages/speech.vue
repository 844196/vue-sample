<template lang="pug">
#speech
  md-card
    form(@submit.prevent='speechNow')
      md-card-header
        .md-title 喋ってみましょう
      md-card-content
          md-input-container
            label Speech text
            md-input(v-model='text')
      md-card-actions
        md-button.md-raised.md-primary(type='submit') 喋る
  md-dialog-alert(md-title='問題が発生しました', :md-content='errorMessage', md-ok-text='OK', ref='errorDialog')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'speech',
  data () {
    return {'text': ''}
  },
  computed: {
    ...mapState([
      'errorMessage'
    ])
  },
  methods: {
    speechNow() {
      this.$store.dispatch('speechNow', this.text)
        .then(() => {
          this.text = ''
        })
        .catch(error => {
          this.$refs['errorDialog'].open()
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
#speech
  width: 100%
  max-width: 720px
  margin: calc(50vh - 129px - 59px) auto
  padding: 16px
</style>
