<template>
  <div class="Timeline card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-history fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.timeline.caption"></span>
    </div>
    <div class="list">
      <div v-for="(yearPost, i) in postsInYears" :key="i">
        <div class="list-year">
          <div class="year-flag">{{yearPost.year}}</div>
          <div class="year-total" v-html="yearTotal(yearPost.posts.length)"></div>
        </div>
        <div class="list-item" v-for="(post, j) in yearPost.posts" :key="j">
          <div class="item-date">{{post.frontmatter.date.substr(0,10)}}</div>
          <div class="item-content">
            <div class="content-title">
              <router-link :to="post.path">{{post.title}}</router-link>
            </div>
            <div class="content-excerpt markdown-body" v-html="post.excerpt"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  computed: {
    postsInYears() {
      let result = [];
      let temp = {};
      let targetPosts = this.mustom$SitePosts;
      if (this.$currentCategories) {
        targetPosts = this.$currentCategories.pages;
      } else if (this.$currentTags) {
        targetPosts = this.$currentTags.pages;
      }
      targetPosts.forEach((post) => {
        let year = post.frontmatter.date.substr(0, 4);
        if (!temp.hasOwnProperty(year)) {
          temp[year] = [];
        }
        temp[year].push(post);
      });
      for (const y in temp) {
        result.push({
          year: y,
          posts: temp[y],
        });
      }
      return result.sort((a, b) => {
        if (a.year < b.year) {
          return 1;
        } else if (a.year > b.year) {
          return -1;
        }
        return 0;
      });
    },
    yearTotal() {
      return function (length) {
        return this.mustom$Locale.timeline.yearTotal.replace(
          "[:total:]",
          `<strong style="color: var(--underline)">${length}</strong>`
        );
      };
    },
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
.list
  padding ($gap * 1.25) $gap
  display grid
  grid-auto-flow row dense
  > div .list-item:last-child .item-content:last-child
    padding-bottom 4rem

.list-year, .list-item
  display grid
  grid-template-columns 8.25rem auto

.list-year
  line-height 5rem
  user-select none

.year-flag
  text-align center
  background var(--highlight)
  font-size 2rem

.year-total
  font-size 0.88rem
  line-height 5.24rem
  height 5rem

.item-date
  text-align right
  padding 1.25rem 1.5rem 0 0
  border-right 0.5rem solid var(--highlight)

.year-total, .item-content
  padding-left 1.5rem

.item-content
  padding-top 1.25rem
  padding-right 1rem
  position relative
  &:after
    content ''
    height 2rem
    width @height
    background var(--txt)
    border 0.5rem solid var(--highlight)
    border-radius 50%
    position absolute
    top 1.25rem
    left -1.25rem

.content-title
  line-height 2rem
  font-size 1.25rem
  margin-bottom 0.5rem
  a
    &:before
      display none
    &:hover
      text-decoration underline

.content-excerpt.markdown-body
  >>> img
    display none
  >>> p
    margin 0

@media (max-width $smallestWidth)
  .list
    padding 1rem 1rem 0 1rem
    > div .list-item:last-child .item-content:last-child
      padding-bottom 0
  .list-year, .list-item
    display grid
    grid-template-columns auto
  .year-flag
    font-size 1.5rem
    line-height 3.5rem
  .list-item
    margin-bottom 1rem
  .year-total
    font-size 0.88rem
    line-height 3rem
    height 3rem
    padding 0
    text-align center
  .item-date
    text-align left
    padding 1rem 0 0 0.75rem
    border-right none
    border-left 0.25rem solid var(--highlight)
  .item-content
    padding 0.25rem 0 0 0
    &:after
      display none
  .content-title
    font-size 1rem
</style>