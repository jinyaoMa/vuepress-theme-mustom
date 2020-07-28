<template>
  <div class="Footer">
    <div v-html="copyright"></div>
    <div v-html="powered"></div>
    <div v-html="themed"></div>
    <div class="footerCount">
      <span :title="mustom$Locale.footer.pv">
        <i class="fas fa-eye fa-fw" />
        {{mustom$Busuanzi.pv}}
      </span>
      <span :title="mustom$Locale.footer.uv">
        <i class="fas fa-user-tie fa-fw" />
        {{mustom$Busuanzi.uv}}
      </span>
      <span :title="mustom$Locale.footer.wd">
        <i class="fas fa-file-word fa-fw" />
        {{mustom$SiteTotalWords}}
      </span>
    </div>
    <div class="license" v-html="license"></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.mustom$InitBusuanzi();
  },
  computed: {
    copyright() {
      return this.mustom$Locale.footer.copyright
        .replace("[:start_year:]", this.$themeConfig.year)
        .replace("[:build_year:]", BUILD_YEAR)
        .replace("[:author:]", this.$themeConfig.author);
    },
    powered() {
      if (typeof __VUEPRESS__ === "undefined") return "";
      return this.mustom$Locale.footer.powered.replace(
        "[:vuepress:]",
        `<a target="_blank" href="${VUEPRESS_OFFICIAL_SITE}" title="VuePress v${__VUEPRESS__.version}">VuePress</a>`
      );
    },
    themed() {
      return this.mustom$Locale.footer.themed
        .replace(
          "[:theme:]",
          `<a target="_blank" href="${THEME_REPO_URL}" title="${THEME_NAME}">${THEME_SHORTNAME}</a>`
        )
        .replace(
          "[:author:]",
          `<a target="_blank" href="${THEME_AUTHOR_LINK}" title="${THEME_AUTHOR}">${THEME_AUTHOR}</a>`
        );
    },
    license() {
      return `<a class="by-nc-sa" target="_blank" href="${CC_LICENSE_LINK}" title="${this.mustom$Locale.footer.license}"></a>`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.Footer
  user-select none
  text-align center
  @media (max-width $smallWidth) and (min-width $smallerWidth)
    text-align left
  background var(--bg)
  padding 0.75rem s('calc(1rem + %s)', $borderRadius) 0.5rem
  border-radius $borderRadius $borderRadius 0 0
  position relative
  overflow hidden
  &:before
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height $borderRadius
    background var(--highlight)

.footerCount
  @media (max-width $smallWidth) and (min-width $smallerWidth)
    position absolute
    right s('calc(1rem + %s)', $borderRadius)
    top 0.75rem
  > span:not(:first-child)
    margin-left 0.1rem

>>> .license
  padding-top 0.5rem
  @media (max-width $smallWidth) and (min-width $smallerWidth)
    position absolute
    right s('calc(1rem + %s)', $borderRadius)
    top 3.25rem
  .by-nc-sa
    display inline-block
    height $footerLicenseHeight
    width $footerLicenseWidth
    background url('../statics/by-nc-sa.svg')
    background-color var(--highlight)
    background-size cover
    &:before
      display none
</style>