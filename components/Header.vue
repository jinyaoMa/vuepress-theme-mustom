<template>
  <div class="Header">
    <div
      :class="`ext ${mustom$Ext === 'portal' ? mustom$Ext : ''}`"
      @click="mustom$SetExt('portal')"
    >
      <i class="fas fa-cube"></i>
    </div>
    <div class="sitename" v-html="$themeConfig.header.sitename[mustom$LangIndex]"></div>
    <div
      :class="`ext ${mustom$Ext === 'search' ? mustom$Ext : ''}`"
      @click="mustom$SetExt('search')"
    >
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="stylus" scoped>
.Header
  zIndex(30)
  position fixed
  top 0
  left 0
  width 100%
  height $headerHeight
  color var(--header)
  background var(--header-bg)
  box-shadow 0 $borderRadius * -0.5 $borderRadius var(--header)
  @media (max-width $smallestWidth)
    box-shadow 0 0 1px var(--header)
  display grid
  grid-template-columns $headerHeight auto $headerHeight
  grid-template-rows $headerHeight

.sitename, .ext
  transition background 0.6s, color 0.6s

.sitename
  text-align center
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  line-height $headerHeight
  font-size s('calc(%s / 3)', $headerHeight)
  @media (max-width $smallestWidth)
    font-size s('calc(%s / 4)', $headerHeight)
  font-weight 555
  >>> em, >>> strong
    display inline-block
    position relative
    + strong
      margin-left 0.5rem
    + em
      margin-right 0.5rem
  >>> em
    font-style normal
    span
      display inline-block
      margin 0 0.1rem
      transform scale(1.1)
  >>> strong
    padding 0 0.5rem
    &:before
      content ''
      position absolute
      top s('calc(%s / 5)', $headerHeight) // 1px offset manually set
      left 0
      height s('calc(%s / 5 * 3)', $headerHeight)
      width 100%
      background var(--link)
      border-radius $borderRadius * 1.5
    span
      position relative
      color var(--readme-more-txt)

.ext
  height $headerHeight
  width @height
  line-height @height
  text-align center
  cursor pointer
  &:hover
    background var(--highlight)
    @media (max-width $smallestWidth)
      background var(--header-bg)
  &.portal
    color var(--readme-more-txt)
    background var(--link)
  &.search
    color var(--readme-more-txt)
    background var(--underline)
</style>