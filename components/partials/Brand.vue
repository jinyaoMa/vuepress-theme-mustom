<template>
  <div class="Brand nav-card">
    <div class="nav-card-caption">
      <i class="fas fa-user fa-fw"></i>
      {{$themeConfig.author}}
    </div>
    <div class="nav-card-inner">
      <div>
        <div class="label">{{$store.getters.locale.brand.signature}}</div>
        <div class="line">{{$themeConfig.brand.signature}}</div>
      </div>
      <div>
        <div class="label">{{$store.getters.locale.brand.statistics}}</div>
        <div class="line count">
          <span :title="$store.getters.locale.brand.pstCount">
            <i class="fas fa-archive fa-fw"></i>
            {{mustom$SiteTotalPosts}}
          </span>
          <span :title="$store.getters.locale.brand.catCount">
            <i class="fas fa-folder-open fa-fw"></i>
            {{mustom$SiteTotalCategoriess}}
          </span>
          <span :title="$store.getters.locale.brand.tagCount">
            <i class="fas fa-tags fa-fw"></i>
            {{mustom$SiteTotalTags}}
          </span>
        </div>
      </div>
      <div>
        <div class="label" v-html="$store.getters.locale.brand.contact"></div>
        <div class="line" v-for="(contact, i) in $themeConfig.brand.contacts" :key="i">
          <span v-html="contact.icon" class="marginRight"></span>
          <a target="_blank" :href="contact.link" :title="contact.link">{{contact.text}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand"
};
</script>

<style lang="stylus" scoped>
.nav-card-inner > div
  padding 0 $gap
  &:not(:last-child)
    margin-bottom 0.25rem

.label
  font-weight bold

.line
  font-size 1.25rem
  margin-top 0.25rem

.count > span:not(:first-child)
  margin-left 0.25rem

.marginRight
  margin-right 0.25rem

a
  color var(--clr-txt)
  transition color 0.3s
  &:hover
    color var(--clr-link)
  &:hover:before
    display none
</style>