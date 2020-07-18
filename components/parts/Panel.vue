<template>
  <div class="Panel">
    <div class="card" v-for="(panel, i) in $themeConfig.panels" :key="i">
      <div class="caption">
        <span class="icon" v-html="panel.icon"></span>
        <span v-html="mustom$Locale.panels.captions[panel.caption]"></span>
      </div>
      <div class="inner" v-if="panel.caption === 'categories'">
        <router-link
          v-for="(cate, name) in $categories.map"
          :key="name"
          :to="cate.path"
          :style="{fontSize:(cate.pages.length/mustom$SiteTotalPosts)+0.75+'rem',opacity:(cate.pages.length/mustom$MaxNumberOfCategories*0.5)+0.5}"
        >{{name}}</router-link>
      </div>
      <div class="inner" v-if="panel.caption === 'tags'">
        <router-link
          v-for="(tag, name) in $tags.map"
          :key="name"
          :to="tag.path"
          :style="{fontSize:(tag.pages.length/mustom$SiteTotalPosts)+0.75+'rem',opacity:(tag.pages.length/mustom$MaxNumberOfTags*0.5)+0.5}"
        >{{name}}</router-link>
      </div>
      <div class="minimize" @click="mustom$ToggleMinimize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel"
};
</script>

<style lang="stylus" scoped>
.Panel
  user-select none

.inner
  padding 0.25rem 0.5rem
  margin-bottom 0.75rem

a
  color var(--txt)
  display inline-block
  margin 0.5rem
  margin-bottom 0
  //transition background 0.6s, transform 0.6s
  &.router-link-exact-active
    color var(--underline)
    opacity 1 !important
    &:before
      width 100%
</style>