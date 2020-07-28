<template>
  <div class="Translate card">
    <div :class="`bar ${isHighlight ? 'isHighlight' : ''}`">
      <div class="sq highlight" :title="mustom$Locale.translate.tooltip">
        <i class="fas fa-highlighter"></i>
      </div>
      <div class="locales">
        <div v-html="mustom$Locale.translate.zh"></div>
        <span>|</span>
        <div v-html="mustom$Locale.translate.en"></div>
        <span>|</span>
        <div v-html="mustom$Locale.translate.jp"></div>
        <transition name="fade">
          <span v-if="isCopied" class="copied" v-html="mustom$Locale.translate.copied"></span>
        </transition>
      </div>
      <div class="sq copy" :title="mustom$Locale.translate.copytip">
        <i class="fas fa-copy"></i>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="result" v-if="hasResult">
        <div class="caption">
          <span class="icon">
            <i class="fas fa-poll-h fa-fw"></i>
          </span>
          <span v-html="mustom$Locale.translate.result"></span>
        </div>
        <div class="inner"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Translate",
  data() {
    return {
      isHighlight: false,
      hasResult: false,
      isCopied: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.Translate
  height 3rem
  overflow visible
  zIndex(32)

.bar
  display grid
  grid-template-columns 3rem auto 3rem
  border-radius $borderRadius
  overflow hidden
  background transparent
  user-select none

.sq
  line-height 3
  text-align center
  background var(--highlight)

.locales
  background var(--bg)
  display flex
  flex-direction row
  justify-content start
  position relative
  > div
    line-height 3
    padding 0 1rem
    cursor pointer
    color var(--link)
    position relative
    &:before
      content ''
      position absolute
      bottom 0
      left 0
      height 2px
      width 0
      background var(--underline)
      transition width 0.6s
    &:hover:before
      width 100%
  > span
    line-height 2.75
  .copied
    line-height 3
    position absolute
    right 0
    color var(--underline)

.highlight
  cursor help

.copy
  cursor pointer
  &:hover
    color var(--bg)
    background var(--underline)

.result
  border-radius 0 0 $borderRadius $borderRadius
  background var(--bg)
  overflow hidden

.inner
  padding 0.5rem 1rem 0.75rem

.isHighlight
  padding 1rem 50vw
  margin -1rem -50vw
  background var(--translate-bg-highlight)
</style>