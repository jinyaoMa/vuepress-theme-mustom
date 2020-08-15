<template>
  <div class="Ext">
    <div class="before" :style="backgroundImageStyle"></div>
    <div class="portal" v-if="mustom$Ext === 'portal'">
      <a
        target="_blank"
        v-for="(portal, i) in $themeConfig.portals"
        :key="i"
        :href="portal.link"
        :title="portal.name"
      >
        <div class="icon" :style="{ backgroundImage: 'url(\'' + portal.icon + '\')' }"></div>
        <div class="info">
          <div class="name">{{portal.name}}</div>
          <div class="desc">{{portal.desc}}</div>
        </div>
      </a>
    </div>
    <div class="search" v-if="mustom$Ext === 'search'">
      <Search />
    </div>
  </div>
</template>

<script>
import Search from "./parts/Search";

export default {
  name: "Ext",
  components: {
    Search,
  },
  computed: {
    backgroundImageStyle() {
      return this.$themeConfig.images.background
        ? {
            backgroundImage:
              "url('" +
              this.$withBase(this.$themeConfig.images.background) +
              "')",
          }
        : {};
    },
  },
};
</script>

<style lang="stylus" scoped>
.Ext
  zIndex(31)
  position fixed
  top $headerHeight
  left 0
  width 100%
  height s('calc(100vh - %s)', $headerHeight)
  background var(--bg)
  overflow-x hidden
  overflow-y auto

.before
  width 100%
  height 100%
  position absolute
  animation appear 0.6s linear

.portal, .search
  animation appear 0.6s linear
  padding $headerHeight
  @media (max-width $smallestWidth)
    padding 1rem

.portal
  display grid
  gap 1rem
  grid-template-columns repeat(3, calc(((100% - 2rem) / 3)))
  @media (max-width $smallerWidth)
    grid-template-columns repeat(2, calc(((100% - 1rem) / 2)))
  @media (max-width $smallestWidth)
    gap 0.5rem
    grid-template-columns 100%
    margin-bottom $headerHeight
  > a
    display inline-block
    width 100%
    height 6rem
    padding 1rem
    color var(--txt)
    position relative
    border-radius $borderRadius
    background-color var(--bg)
    transition background 0.6s, box-shadow 0.6s
    &:before
      display none
    &:hover
      box-shadow 0 0 0 1px

.icon
  height 4rem
  width 4rem
  position absolute
  left 1rem
  top 1rem
  background-size cover
  border-radius $borderRadius

.info
  margin-left 5rem

.name, .desc
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.desc
  filter invert(0.233)
</style>