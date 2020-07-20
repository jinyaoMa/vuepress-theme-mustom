<template>
  <div class="Header">
    <div :class="mustom$Ext === 'portal' && mustom$Ext"><i class="fas fa-cube ext" @click="mustom$SetExt('portal')"></i></div>
    <div class="sitename" v-html="mustom$Locale.sitename"></div>
    <div :class="mustom$Ext === 'search' && mustom$Ext"><i class="fas fa-search ext" @click="mustom$SetExt('search')"></i></div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
  box-shadow 0 0 $gap * 0.25 1px var(--header)
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
  font-size $headerHeight * 0.3
  @media (max-width $smallestWidth)
    font-size $headerHeight * 0.25
  font-weight bold

.ext
  margin $headerHeight * 0.2
  height $headerHeight * 0.6
  width @height
  line-height @height
  text-align center
  cursor pointer
  border-radius $borderRadius
  &:hover
    background var(--highlight)

.portal
  color var(--link)

.search
  color var(--underline)
</style>