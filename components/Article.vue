<template>
  <div class="Article card fix">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-file fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.article.caption"></span>
    </div>
    <div class="inner">
      <div class="meta">
        <div class="meta-title">{{$page.title}}</div>
        <div class="meta-info" v-if="$page.id === 'post'">
          <div class="info-date">
            <i class="fas fa-calendar-alt fa-fw" />
            {{$page.frontmatter.date.substr(0,10)}}
          </div>
          <div class="info-updated">
            <i class="fas fa-calendar-check fa-fw" />
            {{$page.frontmatter.updated.substr(0,10)}}
          </div>
          <div class="info-categories">
            <i class="fas fa-folder-open fa-fw" />
            <span v-for="(cate, i) in $page.frontmatter.categories.flat(Infinity)" :key="i">
              <span v-if="i!==0">&nbsp;,</span>
              <router-link :to="$categories.map[cate].path">{{cate}}</router-link>
            </span>
          </div>
          <div class="info-wordcount">
            <i class="fas fa-file-word fa-fw" />
            {{addK($page.frontmatter.wordcount)}}
          </div>
          <div class="info-wordcount">
            <i class="fas fa-stopwatch fa-fw" />
            {{getMin2Read($page.frontmatter.min2read)}}
          </div>
        </div>
      </div>
      <Content class="markdown-body" />
      <div class="tail">
        <div class="ending">
          <span v-html="mustom$Locale.article.ending.left"></span>
          <i class="far fa-dot-circle fa-fw"></i>
          <span v-html="mustom$Locale.article.ending.right"></span>
        </div>
        <div class="friend">
          <div v-html="mustom$Locale.article.friend.text"></div>
          <div class="button" v-html="mustom$Locale.article.friend.button" @click="friend"></div>
          <div class="qrcode" ref="qrcode">
            <div v-for="(item, i) in $themeConfig.qrcodes" :key="i">
              <img :src="$withBase(item.path)" />
              <div v-html="item.locale[mustom$LangIndex]"></div>
            </div>
          </div>
        </div>
        <div class="share">
          <SocialShare />
        </div>
        <div class="license">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  mounted() {
    this.friend();
  },
  methods: {
    addK(num) {
      if (num >= 1000) {
        num = Math.round(num / 100) / 10 + "k";
      }
      return num;
    },
    getMin2Read(min) {
      return this.mustom$Locale.article.minuteUnit.replace("[time]", min);
    },
    friend() {
      const qrcode = this.$refs.qrcode;
      if (qrcode.classList.contains("mini")) {
        qrcode.classList.remove("mini");
        window.setTimeout((o) => {
          qrcode.style.height = "auto";
        }, 200);
      } else {
        qrcode.style.height = qrcode.offsetHeight + "px";
        window.setTimeout((o) => {
          qrcode.classList.add("mini");
        }, 0);
      }
      window.setTimeout((o) => {
        this.mustom$TriggerResizeIncrement();
      }, 200);
    },
  },
};
</script>

<style lang="stylus" scoped>
.Article.fix
  margin -50vh calc(-50vw + 50%)
  padding 50vh calc(50vw - 50%)
  background none
  @media (max-width $smallestWidth)
    margin 0
    padding 0

.inner
  background var(--bg)
  padding $gap
  padding-bottom $gap * 1.25
  @media (max-width $smallestWidth)
    padding 1rem

.meta
  text-align center
  margin-bottom $gap * 2
  @media (max-width $smallestWidth)
    margin-bottom 1.25rem

.meta-title
  font-size 3rem
  line-height 1.5
  padding-bottom 1rem
  border-bottom 0.25rem solid var(--highlight)
  @media (max-width $smallestWidth)
    font-size 1.75rem
    padding-bottom 0.5rem

.meta-info
  line-height 2
  padding-top 0.5rem
  user-select none
  > div
    display inline-block
    margin 0 0.5rem

.tail
  user-select none
  margin-top $gap * 2
  @media (max-width $smallestWidth)
    margin-top 1.25rem

.ending
  color var(--article-ending)
  border-top 0.5rem dashed
  display grid
  grid-template-columns auto 2rem auto
  font-size 1.25rem
  justify-content center
  justify-items center
  line-height 2.5
  @media (max-width $smallerWidth)
    font-size 1rem
  @media (max-width $smallestWidth)
    grid-template-columns auto 1.25rem auto
    font-size 0.8rem
  i
    line-height 2.5

.friend
  text-align center
  margin $gap * 0.5 0
  line-height 1.5
  @media (max-width $smallestWidth)
    margin 1rem 0

.button
  width fit-content
  margin 1rem auto
  padding 1rem
  border-radius $borderRadius
  background var(--txt)
  color var(--bg)
  font-size 1.25rem
  line-height 1
  cursor pointer
  transition background 0.6s, filter 0.6s
  &:hover
    filter invert(0.1)

.qrcode
  display flex
  flex-direction row
  justify-content center
  flex-wrap wrap
  overflow hidden
  transition background 0.6s, height 0.2s
  position relative
  &.mini
    height 0 !important
  > div
    margin 0 0.5rem 1rem 0.5rem
    line-height 1
    &:hover > div
      animation shake 0.1s linear infinite

.share
  text-align center

>>> div[class*='language-']
  border-radius 0
  margin 0 $gap * -1
  color var(--article-language-txt)
  > pre
    padding-left $gap
    padding-right $gap
  &:before
    line-height (8 / 3)
    top 0.6rem
    right s('calc(16px + %s)', $gap)
    margin-right s('calc(-16px - %s)', $gap)
    padding-left 0.625rem
    padding-right s('calc(16px + %s)', $gap)
    background var(--article-language-bg)
    color var(--article-language-txt)
    pointer-events none
    @media (max-width $smallestWidth)
      opacity 0
</style>