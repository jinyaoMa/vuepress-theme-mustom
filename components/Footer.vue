<template>
  <div class="Footer">
    <div class="pointup" @click="mustom$Scroll2Header">
      <i class="fas fa-angle-up"></i>
    </div>
    <div class="inner">
      <div class="front">
        <div v-html="getCopyright"></div>
        <div v-html="getPowered"></div>
        <div v-html="getThemed"></div>
        <div class="count">
          <span :title="$store.getters.locale.footer.pv">
            <i class="fas fa-eye fa-fw"></i>
            {{mustom$Busuanzi.pv}}
          </span>
          <span :title="$store.getters.locale.footer.uv">
            <i class="fas fa-user-tie"></i>
            {{mustom$Busuanzi.uv}}
          </span>
          <span :title="$store.getters.locale.footer.wd">
            <i class="fas fa-file-word"></i>
            {{mustom$SiteTotalWords}}
          </span>
        </div>
        <div>
          <a
            class="license"
            target="_blank"
            :href="CC_LICENSE_LINK"
            :title="$store.getters.locale.footer.license"
          >
            <img src="../assets/by-nc-sa.png" />
          </a>
        </div>
      </div>
      <div class="center">{{$store.getters.locale.footer.friend}}</div>
      <div class="end">
        <div>
          <img src="/assets/img/qq.qun.png" />
          <div>{{$store.getters.locale.footer.labelqr}}{{$themeConfig.footerQQGroup}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      CC_LICENSE_LINK: CC_LICENSE_LINK
    };
  },
  created() {
    // Busuanzi
    this.mustom$InitBusuanzi();
  },
  computed: {
    getCopyright() {
      return this.$store.getters.locale.footer.copyright
        .replace("[:start_year:]", this.$themeConfig.year)
        .replace("[:build_year:]", BUILD_YEAR)
        .replace("[:author:]", this.$themeConfig.author);
    },
    getPowered() {
      const text = __VUEPRESS__
        ? `VuePress v${__VUEPRESS__.version}`
        : "VuePress";
      return this.$store.getters.locale.footer.powered.replace(
        "[:vuepress:]",
        `<a href="${VUEPRESS_OFFICIAL_SITE}" target="_blank" title="${text}">${text}</a>`
      );
    },
    getThemed() {
      return this.$store.getters.locale.footer.themed
        .replace(
          "[:theme:]",
          `<a href="${THEME_REPO_URL}" target="_blank" title="${THEME_NAME}">${THEME_SHORTNAME}</a>`
        )
        .replace(
          "[:author:]",
          `<a href="${THEME_AUTHOR_LINK}" target="_blank" title="${this.$themeConfig.author}">${THEME_AUTHOR}</a>`
        );
    }
  }
};
</script>

<style lang="stylus" scoped>
.Footer
  min-height $footerMinHeight
  background-color var(--clr-bg)
  position relative
  user-select none

.pointup
  background-color var(--clr-bg)
  height $pointupHeight
  width @height
  position absolute
  top $pointupHeight * -2
  left s('calc(50% - %s)', ($pointupHeight / 2))
  line-height $pointupHeight * 1.025
  font-size $pointupHeight * 0.5
  text-align center
  border-radius 50%
  cursor pointer
  i
    transition color 0.6s, filter 0.2s
  &:hover i
    color var(--clr-txt-dark)
    filter drop-shadow(0 0 1px)

.inner
  max-width $maxWidth
  margin 0 auto
  padding $footerLineHeight * 0.75 $sidePadding
  display flex
  justify-content space-between
  > div
    width calc((100% / 3))

.center
  text-align center
  line-height $footerLineHeight * 4
  font-size $footerLineHeight * 0.5
  font-weight bold
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

.front
  > div
    font-size $footerLineHeight * 0.33
    line-height $footerLineHeight
    height $footerLineHeight

.end
  display flex
  flex-direction row
  justify-content flex-end
  text-align center
  font-size $footerLineHeight * 0.33
  line-height $footerLineHeight
  user-select text
  img
    display block
    height $footerLineHeight * 4

.count > span:not(:first-child)
  margin-left 0.25rem

.license:hover:before
  display none

@media (max-width: 1024px)
  .inner
    flex-direction column-reverse
    text-align center !important
    > div
      width 100%
  .end
    display block
    img
      margin 0 auto
  .center
    line-height $footerLineHeight * 2

@media (max-width: 480px)
  .inner
    padding $footerLineHeight * 0.5 0
  .center
    line-height $footerLineHeight * 1.35
    font-size $footerLineHeight * 0.35
</style>