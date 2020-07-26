<template>
  <div class="Brand card">
    <div class="caption ifSmallest">
      <span class="icon">
        <i class="fas fa-id-card fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.brand.caption"></span>
    </div>
    <div class="avatar"></div>
    <div class="inner">
      <div class="author">{{$themeConfig.author}}</div>
      <div class="signature" v-html="$themeConfig.brand.signatures[mustom$LangIndex]"></div>
      <div class="counter">
        <span :title="mustom$Locale.brand.pstCount">
          <i class="fas fa-archive fa-fw"></i>
          {{mustom$SiteTotalPosts}}
        </span>|
        <span :title="mustom$Locale.brand.catCount">
          <i class="fas fa-folder-open fa-fw"></i>
          {{mustom$SiteTotalCategoriess}}
        </span>|
        <span :title="mustom$Locale.brand.tagCount">
          <i class="fas fa-tags fa-fw"></i>
          {{mustom$SiteTotalTags}}
        </span>
      </div>
      <div class="contact">
        <a
          target="_blank"
          v-for="(cnt, i) in $themeConfig.brand.contacts"
          :key="i"
          :href="cnt.link"
          :title="cnt.text"
          v-html="cnt.icon"
        ></a>
      </div>
    </div>
    <div class="minimize ifSmallest" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Brand",
};
</script>

<style lang="stylus" scoped>
.Brand
  display grid
  grid-template-areas 'avatar' 'inner'
  @media (max-width $smallWidth)
    grid-template-areas 'avatar inner'
    grid-template-columns 12rem auto
  @media (max-width $smallestWidth)
    grid-template-areas 'caption' 'avatar' 'inner'
    grid-template-columns auto

.caption
  grid-area caption
  display none

.minimize
  display none

.ifSmallest
  @media (max-width $smallestWidth)
    display block

.avatar, .inner
  margin 1rem

.avatar
  max-width s('calc(%s - 2rem)', $sideWidth)
  background url('/assets/img/brand.png')
  background-size cover
  border-radius $borderRadius
  grid-area avatar
  padding inherit
  @media (max-width $smallestWidth)
    margin 1rem auto
    width 100%
    max-width calc(100% - 2rem)
  &:before
    content ''
    display block
    padding-top 100%

.inner
  text-align center
  @media (max-width $smallWidth) and (min-width $smallestWidth)
    text-align left
    > div
      margin 0 0 0 -1rem
  grid-area inner
  > div:not(.author)
    padding 0 0.5rem

.author
  font-size 1.5rem
  line-height 1
  margin -1rem -1rem
  padding 1rem 1rem
  background var(--highlight)
  font-weight bold
  @media (max-width $smallWidth) and (min-width $smallestWidth)
    line-height 2
    padding 0 0 0 1rem
    border-radius $borderRadius

.signature
  margin-top 1rem

.counter
  padding 0 0.5rem
  user-select none
  span
    display inline-block
    &:not(:last-child)
      margin-right 0.5rem
    &:not(:first-child)
      margin-left 0.25rem

.contact
  margin-top 0.5rem !important
  a
    display inline-block
    color var(--txt)
    background var(--highlight)
    font-size 1.25rem
    width 2.5rem
    transition color 0.6s
    text-align center
    &:hover
      color var(--underline)
    &:not(:last-child)
      margin-right 0.5rem
</style>