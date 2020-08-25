<template>
  <div class="Gallery">
    <div class="card" v-for="(pic, i) in $themeConfig.gallery" :key="i">
      <div class="caption">
        <div class="frame">
          <span class="icon">
            <i class="fas fa-image fa-fw"></i>
          </span>
          <span v-html="pic.name"></span>
        </div>
      </div>
      <div class="inner">
        <a target="_blank" :href="pic.url">
          <img :src="pic.url" />
        </a>
      </div>
      <div class="minimize" @click="mustom$ToggleMinimize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style lang="stylus" scoped>
.Gallery
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0

.inner
  padding 0.5rem

a
  display block
  &:before
    display none

img
  max-width 100%
  display block
  margin 0 auto
  border-radius $borderRadius

.caption
  white-space nowrap
  padding-right 2.25rem

.frame
  overflow hidden
  text-overflow ellipsis
</style>