<template lang="pug">
  #app
    my-header
    main.main
      navigation-tab
      .content
        router-view
</template>

<script>
  import MyHeader from '@/components/MyHeader'
  import NavigationTab from '@/components/NavigationTab'

  export default {
    components: {
      MyHeader,
      NavigationTab
    }
  }
</script>

<style lang="stylus">
html,
body
  width 100%
  height 100%
body
  font-size 0.16rem !important
#app
  position relative
  height 100%
  .main
    display flex
    position absolute
    top 0.5rem
    left 0
    right 0
    bottom 0
    .content
      flex-grow 1
      background-color #fafafa
</style>
