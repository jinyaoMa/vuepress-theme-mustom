<template>
  <div class="Brand card">
    <div class="caption ifSmallest">
      <span class="icon">
        <i class="fas fa-id-card fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.brand.caption"></span>
    </div>
    <div class="avatar" :style="avatarStyle"></div>
    <div class="inner">
      <div class="author">{{ $themeConfig.author }}</div>
      <div
        class="signature"
        v-html="$themeConfig.brand.signatures[mustom$LangIndex]"
      ></div>
      <div class="counter">
        <span :title="mustom$Locale.brand.pstCount">
          <i class="fas fa-archive fa-fw"></i>
          {{ mustom$SiteTotalPosts }} </span
        >|
        <span :title="mustom$Locale.brand.catCount">
          <i class="fas fa-folder-open fa-fw"></i>
          {{ mustom$SiteTotalCategoriess }} </span
        >|
        <span :title="mustom$Locale.brand.tagCount">
          <i class="fas fa-tags fa-fw"></i>
          {{ mustom$SiteTotalTags }}
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
  computed: {
    avatarStyle() {
      return this.$themeConfig.images && this.$themeConfig.images.brand
        ? {
            backgroundImage: `url('${this.$withBase(
              this.$themeConfig.images.brand
            )}')`,
          }
        : {};
    },
  },
};
</script>

<style lang="stylus" scoped>
.Brand
  display grid
  grid-template-areas 'avatar' 'inner'
  @media (max-width $smallerWidth)
    grid-template-areas 'avatar inner'
    grid-template-columns 8.125rem auto
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

.avatar
  margin 1rem
  max-width s('calc(%s - 2rem)', $sideWidth)
  background-image url('../../statics/brand.png')
  background-color var(--highlight)
  background-size cover
  border-radius $borderRadius
  grid-area avatar
  padding inherit
  @media (max-width $smallestWidth)
    margin 1rem auto
    width 50%
    max-width $sideWidth
    border-radius 50%
  &:before
    content ''
    display block
    padding-top 100%

.inner
  position relative
  grid-area inner
  padding 1.5rem 1rem 1rem
  border-top 0.25rem dashed var(--article-ending)
  text-align center
  @media (max-width $smallerWidth) and (min-width $smallestWidth)
    padding 1rem 1rem 1rem 1.5rem
    border-top none
    border-left 0.25rem dashed var(--article-ending)
    text-align left
    > div
      margin 0 0 0 -1rem
  > div:not(.author)
    padding 0 0.5rem

.author
  font-size 1.5rem
  line-height 1
  margin -1rem
  padding 1rem
  // background var(--highlight)
  text-shadow 1rem 1rem var(--txt-shadow)
  transform translate3d(-0.325rem, -0.6rem, 0)
  font-weight 666
  @media (max-width $smallerWidth) and (min-width $smallestWidth)
    line-height 2
    padding 0 0 0 1rem
    border-radius $borderRadius

.signature
  margin-top 1.25rem
  line-height 1.5
  padding-top 0.25rem
  padding-bottom 0.25rem

.counter
  padding 0 0.5rem
  user-select none
  @media (max-width $smallerWidth) and (min-width $smallestWidth)
    margin-top 0.5rem !important
    line-height 1
  span
    display inline-block
    &:not(:last-child)
      margin-right 0.5rem
    &:not(:first-child)
      margin-left 0.25rem

.contact
  margin-top 0.5rem !important
  @media (max-width $smallerWidth) and (min-width $smallestWidth)
    position absolute
    top 0
    right 0
  a
    display inline-block
    color var(--txt)
    // background var(--highlight)
    font-size 1.25rem
    width 2.5rem
    transition color 0.6s
    text-align center
    &:hover
      color var(--underline)
    &:not(:last-child)
      margin-right 0.5rem
</style>