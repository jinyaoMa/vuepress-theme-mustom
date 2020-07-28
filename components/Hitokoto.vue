<template>
  <div class="Hitokoto card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-circle-notch fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.hitokoto.caption"></span>
    </div>
    <div class="inner">
      <div class="word" v-html="mustom$Hitokoto.word"></div>
      <div class="from" v-html="mustom$Hitokoto.from"></div>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Hitokoto",
  mounted() {
    this.mustom$InitHitokoto();
  }
};
</script>

<style lang="stylus" scoped>
.inner
  line-height 1.5
  position relative
  border-bottom $borderRadius solid var(--highlight)
  padding-bottom $hitokotoImgHeight * 0.66
  @media (max-width $smallestWidth)
    padding-bottom $hitokotoImgHeight * 0.33
  text-align center
  &:before, &:after
    content ''
    position absolute
    bottom 0
    height $hitokotoImgHeight * 0.66
    width $hitokotoImgWidth * 0.66
    background-size cover
    @media (max-width $smallestWidth)
      height $hitokotoImgHeight * 0.33
      width $hitokotoImgWidth * 0.33
  &:before
    left 0
    background-image url('../statics/qf3cu.huaji.left.png')
  &:after
    right 0
    background-image url('../statics/qf3cu.huaji.right.png')

.word
  padding 2rem
  position relative
  font-size 1.25rem
  &:before
    content '『'
    position absolute
    left 0.5rem
    top 1rem
  &:after
    content '』'
    position absolute
    right 0.5rem
    bottom 1rem
  @media (max-width $smallestWidth)
    padding 1rem
    font-size 1rem
    &:before, &:after
      display none

.from
  position absolute
  width 100%
  padding 1rem 0
  z-index 1
  @media (max-width $smallestWidth)
    position relative
    padding 0
  &:before, &:after
    content ' — '
</style>