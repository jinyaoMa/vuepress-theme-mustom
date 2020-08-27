<template>
  <div :class="`Article card fix ${mustom$Readmode ? 'isReading' : ''}`">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-file fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.article.caption"></span>
    </div>
    <div class="inner">
      <div
        :class="`meta ${$page.id !== 'post' ? 'page-meta' : ''} ${$page.frontmatter.isContentEmpty ? 'contentEmpty' : ''}`"
        ref="meta"
      >
        <div class="meta-title">{{$page.title || $page.frontmatter.title}}</div>
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
            {{min2Read($page.frontmatter.min2read)}}
          </div>
        </div>
      </div>
      <Content class="markdown-body" />
      <div class="tail" v-if="$page.id === 'post'">
        <div class="ending">
          <span v-html="mustom$Locale.article.ending.left"></span>
          <i class="far fa-dot-circle fa-fw"></i>
          <span v-html="mustom$Locale.article.ending.right"></span>
        </div>
        <div class="friend">
          <div v-html="mustom$Locale.article.friend.text"></div>
          <div class="button" v-html="mustom$Locale.article.friend.button" @click="friend"></div>
          <div class="qrcode" ref="qrcode" v-if="($themeConfig.qrcodes instanceof Array)">
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
          <div class="frame">
            <div>
              <span v-html="mustom$Locale.article.license.author"></span>
              <a target="_blank" :href="$withBase('/')" v-html="$themeConfig.author"></a>
            </div>
            <div>
              <span v-html="mustom$Locale.article.license.link"></span>
              <a target="_blank" :href="permalink" v-html="permalink"></a>
            </div>
            <div>
              <span v-html="mustom$Locale.article.license.copyright"></span>
              <span v-html="license"></span>
            </div>
          </div>
        </div>
        <div class="tags">
          <router-link
            v-for="(tag, i) in $page.frontmatter.tags.flat(Infinity)"
            :key="i"
            :to="$tags.map[tag].path"
          ># {{tag}}</router-link>
        </div>
        <div class="pn">
          <router-link
            class="prev"
            v-if="prevIndex >= 0"
            :to="getPage(prevIndex).path || '#'"
            :title="mustom$Locale.article.prev + getPage(prevIndex).title"
          >{{getPage(prevIndex).title}}</router-link>
          <router-link
            class="next"
            v-if="nextIndex < mustom$SitePosts.length"
            :to="getPage(nextIndex).path || '#'"
            :title="mustom$Locale.article.next + getPage(nextIndex).title"
          >{{getPage(nextIndex).title}}</router-link>
        </div>
      </div>
      <div
        class="readmode"
        v-if="!mustom$IsMobile && !$page.frontmatter.isContentEmpty"
        @click="mustom$ToggleReadmode"
      >
        <span
          v-html="mustom$Readmode ? mustom$Locale.article.readmode.close : mustom$Locale.article.readmode.open"
        ></span>
        <i :class="`fas ${mustom$Readmode ? 'fa-book' : 'fa-book-open'}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      prevIndex: -1,
      nextIndex: -1,
    };
  },
  mounted() {
    if (this.$page.id === "post") {
      this.friend();
      this.doPrevNext();
    } else {
      this.fixMargin();
    }
  },
  updated() {
    if (this.$page.id === "post") {
      this.doPrevNext();
    } else {
      this.fixMargin();
    }
  },
  beforeDestroy() {
    this.mustom$CloseReadmode();
  },
  computed: {
    min2Read() {
      return function (min) {
        return this.mustom$Locale.article.minuteUnit.replace("[:time:]", min);
      };
    },
    permalink() {
      if (typeof window === "undefined") return this.$withBase("/");
      return window.location.href;
    },
    license() {
      return this.mustom$Locale.article.license.notice.text.replace(
        "[:license:]",
        `<a target="_blank" href="${CC_LICENSE_LINK}">${this.mustom$Locale.article.license.notice.name}</a>`
      );
    },
  },
  methods: {
    fixMargin() {
      const target = this.$el.querySelector(".markdown-body");
      if (target && target.innerText === "") {
        this.$refs.meta.classList.add('fixMargin');
      } else {
        this.$refs.meta.classList.remove('fixMargin');
      }
    },
    getPage(index) {
      return this.mustom$SitePosts[index] || {};
    },
    doPrevNext() {
      for (let i = 0; i < this.mustom$SitePosts.length; i++) {
        const page = this.mustom$SitePosts[i];
        if (page.path === this.$page.path) {
          this.prevIndex = i - 1;
          this.nextIndex = i + 1;
          break;
        }
      }
    },
    addK(num) {
      if (num >= 1000) {
        num = Math.round(num / 100) / 10 + "k";
      }
      return num;
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

.Article.isReading
  z-index 999999998
  position fixed
  top 0
  left 0
  width 100%
  padding 0
  margin 0
  border-radius 0
  height 100vh
  overflow-x hidden
  overflow-y auto
  background var(--header-bg)
  transition none
  >>> img
    cursor default
    pointer-events none
  .caption, .inner
    max-width $readingWidth
    margin 0 auto

.caption
  border-radius $borderRadius $borderRadius 0 0
  @media (max-width $smallestWidth)
    border-radius 0

.inner
  position relative
  background var(--bg)
  border-radius 0 0 $borderRadius $borderRadius
  padding $gap
  @media (max-width $smallestWidth)
    border-radius 0
    padding 1rem

.meta
  text-align center
  margin-bottom $gap * 1.75
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
  margin-top $gap * 1.75
  @media (max-width $smallestWidth)
    margin-top 1.5rem

.ending
  color var(--article-ending)
  border-top 0.5rem dashed
  display grid
  grid-template-columns auto 2rem auto
  font-size 1.25rem
  justify-content center
  justify-items center
  line-height 2.5
  padding 0 $gap
  margin 0 $gap * -1
  @media (max-width $smallerWidth)
    font-size 1rem
  @media (max-width $smallestWidth)
    grid-template-columns auto 1.25rem auto
    font-size 0.8rem
  i
    line-height 2.5

.friend
  text-align center
  margin $gap * 0.5 0 s('calc(%s - 0.5rem)', $gap * 0.5)
  line-height 1.5
  @media (max-width $smallestWidth)
    margin 1rem 0

.button
  width fit-content
  margin 1rem auto 0.75rem
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
  transition background 0.6s, height 0.5s
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

.license
  width 100%
  background var(--article-license-bg)
  overflow-y hidden
  overflow-x auto
  margin $gap * 0.5 0
  font-size 0.95rem

.frame
  line-height 2
  padding 0.5rem 0.25rem 0.5rem 0.75rem
  white-space nowrap
  border-left 0.25rem solid var(--link)
  span
    display inline-block
    &:first-child
      margin-right 0.25rem
      font-weight bold

.tags
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content center
  line-height 1.5
  margin-top s('calc(%s + 0.25rem)', $gap * 0.5)
  margin-bottom $gap * 0.5
  > a
    margin 0.5rem
    margin-top 0

.pn
  display grid
  grid-template-columns repeat(2, calc(50% - 0.5rem))
  grid-template-areas 'prev next'
  @media (max-width $smallestWidth)
    grid-template-columns 100%
    grid-template-areas 'prev' 'next'
  gap 1rem
  .prev
    grid-area prev
    @media (max-width $smallestWidth)
      text-align center
  .next
    grid-area next
    text-align right
    @media (max-width $smallestWidth)
      text-align center
    &:before
      left auto
      right 0

>>> div[class*='language-']
  border-radius 0
  margin 0 $gap * -1
  color var(--article-language-txt)
  > pre
    padding-left $gap
    padding-right $gap
  &:before
    line-height 1.5
    top 0
    right 0
    text-align center
    min-width $gap
    padding $borderRadius 0.5rem
    margin-right $gap
    border-radius 0 0 $borderRadius $borderRadius
    background var(--article-language-bg)
    color var(--article-language-txt)
    pointer-events none
    @media (max-width $smallestWidth)
      opacity 0

.page-meta
  margin-bottom s('calc(1rem + %s)', $gap)
  &.contentEmpty
    margin-bottom 0
  @media (max-width $smallestWidth)
    margin-bottom 1rem

.readmode
  position absolute
  top -1.55rem
  right 0.75rem
  cursor pointer
  color var(--underline)
  line-height 1
  opacity 0.5
  font-size 0.7rem
  user-select none
  @media (max-width $smallestWidth)
    display none

.fixMargin
  margin-bottom 0 !important
</style>