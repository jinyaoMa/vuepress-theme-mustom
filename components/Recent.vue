<template>
  <div class="Recent card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-clock fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.recent.caption"></span>
    </div>
    <div class="inner">
      <div class="list">
        <transition-group name="fade">
          <div class="list-item" v-for="(post, i) in mustom$SitePosts.slice(0, offset)" :key="i">
            <div class="item-info markdown-body">
              <div class="item-title">
                <router-link :to="post.path">{{post.title}}</router-link>
              </div>
              <div class="item-meta">
                <div class="meta-date">
                  <i class="fas fa-calendar-alt fa-fw" />
                  {{post.frontmatter.date.substr(0,10)}}
                </div>
                <div class="meta-updated">
                  <i class="fas fa-calendar-check fa-fw" />
                  {{post.frontmatter.updated.substr(0,10)}}
                </div>
                <div class="meta-categories">
                  <i class="fas fa-folder-open fa-fw" />
                  <span v-for="(cate, j) in post.frontmatter.categories.flat(Infinity)" :key="j">
                    <span v-if="j!==0">&nbsp;,</span>
                    <router-link :to="$categories.map[cate].path">{{cate}}</router-link>
                  </span>
                </div>
              </div>
              <div class="item-excerpt" v-html="post.excerpt"></div>
            </div>
            <div
              :class="post.frontmatter.cover ? 'item-cover' : ''"
              :style="{'background-image':(post.frontmatter.cover ? 'url('+post.frontmatter.cover+')' : 'none')}"
            ></div>
          </div>
        </transition-group>
      </div>
      <div
        class="more"
        @click="incrementOffset"
        v-if="offset < mustom$SitePosts.length"
        v-html="mustom$Locale.recent.more"
      ></div>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Recent",
  data() {
    return {
      offset: 3,
    };
  },
  methods: {
    incrementOffset() {
      this.offset += 3;
    },
  },
};
</script>

<style lang="stylus" scoped>
>>> a
  padding 0.25rem 0
  &:before
    display none

.list-item
  padding $gap 0 s('calc(%s - 0.25rem)', $gap)
  margin 0 $gap
  @media (max-width $smallestWidth)
    padding 1rem 0 0.75rem
    margin 0 1rem
  display flex
  flex-direction row
  &:not(:last-child)
    border-bottom 0.25rem solid var(--highlight)

.item-info
  min-width 66%
  > div
    margin-bottom 0.75rem

.item-title
  font-size 1.5rem
  a
    color var(--link)
  @media (max-width $smallestWidth)
    font-size 1rem

.item-meta
  user-select none
  a
    color var(--link)

.item-cover
  width 100%
  background-size cover
  background-color var(--highlight)
  margin-left 1rem
  border-radius 0.25rem

.item-excerpt
  img
    display none

.more
  user-select none
  border-top 0.25rem solid var(--underline)
  color var(--underline)
  padding 0.5rem
  text-align center
  cursor pointer
  &:hover
    color var(--bg)
    background-color var(--underline)
  @media (max-width $smallestWidth)
    font-size 0.8rem
    padding 0.75rem
    color var(--bg)
    background-color var(--underline)
    border-top none
</style>