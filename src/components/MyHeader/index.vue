<template lang="pug">
  header.my-header.flex
    .logo-wrap.flex.items-center
      .logo
      .title {{ title }}
</template>

<script>
  export default {
    data () {
      return {
        title: 'Kitty Music'
      }
    }
  }
</script>

<style lang="stylus">
.my-header
  width 100vw
  height 0.5rem
  background-color #c62f2f
  color white
  .logo-wrap
    padding 0 0.30rem
    .logo
      width 0.21rem
      height 0.21rem
      box-shadow 0 0 0.02rem 0.02rem white
      background-image url('~@/assets/imgs/logo.png')
      background-size 100% 100%
      background-color white
      border-radius 50%
    .title
      user-select none
      font-size 0.155rem
      padding 0 0.12rem
</style>
