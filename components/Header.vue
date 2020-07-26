<template>
  <div class="Header">
    <div :class="`ext ${mustom$Ext === 'portal' ? mustom$Ext : ''}`" @click="mustom$SetExt('portal')">
      <i class="fas fa-cube"></i>
    </div>
    <div class="sitename" v-html="$themeConfig.header.sitename[mustom$LangIndex]"></div>
    <div :class="`ext ${mustom$Ext === 'search' ? mustom$Ext : ''}`" @click="mustom$SetExt('search')">
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
  font-size $headerHeight * 0.3
  @media (max-width $smallestWidth)
    font-size $headerHeight * 0.25
  font-weight bold

.ext
  height $headerHeight
  width @height
  line-height @height
  text-align center
  cursor pointer
  &:hover
    background var(--highlight)
  &.portal
    color var(--bg)
    background var(--link)
  &.search
    color var(--bg)
    background var(--underline)
</style>