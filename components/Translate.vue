<template>
  <div class="Translate card">
    <div :class="`bar ${isHighlight ? 'isHighlight' : ''}`">
      <div class="sq highlight" :title="mustom$Locale.translate.tooltip">
        <i class="fas fa-highlighter"></i>
      </div>
      <div class="locales">
        <div v-html="mustom$Locale.translate.zh" @click="translate('zh')"></div>
        <span>|</span>
        <div v-html="mustom$Locale.translate.en" @click="translate('en')"></div>
        <span>|</span>
        <div v-html="mustom$Locale.translate.jp" @click="translate('jp')"></div>
        <transition name="fade">
          <span v-if="isCopied" class="copied" v-html="mustom$Locale.translate.copied"></span>
        </transition>
      </div>
      <div class="sq copy" :title="mustom$Locale.translate.copytip" @click="copy">
        <i class="fas fa-copy"></i>
      </div>
    </div>
    <transition name="fade">
      <div class="result" v-if="isHighlight && isTranslated && hasResult">
        <div class="caption">
          <span class="icon">
            <i class="fas fa-poll-h fa-fw"></i>
          </span>
          <span v-html="mustom$Locale.translate.result"></span>
        </div>
        <div :class="`inner ${isError ? 'error' : ''}`" v-html="result"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import baiduTranslate from "../utils/baiduTranslate";
import decode from "../utils/decode";

export default {
  name: "Translate",
  props: ["isHighlight", "isTranslated"],
  data() {
    return {
      hasResult: false,
      isCopied: false,
      isError: false,
      result: "",
    };
  },
  watch: {
    isHighlight(flag) {
      if (flag) {
        let rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
        this.$el.style.transform =
          "translate3d(0,calc(1.25rem + " +
          (window.scrollY + rect.y + rect.height - this.$el.offsetTop) +
          "px),0)";
      } else {
        this.$el.style.transform = "translate3d(0,0,0)";
      }
      this.isCopied = false;
    },
  },
  methods: {
    copy() {
      const query = window.getSelection().toString().trim();
      if (query.length > 0 && document.execCommand("copy")) {
        this.isCopied = true;
      }
    },
    translate(lang) {
      this.result = "";
      this.hasResult = false;
      this.mustom$SetSpin(true);
      const query = window.getSelection().toString().trim();
      const secret = this.$themeConfig.translate.isEncoded
        ? decode(this.$themeConfig.translate.secret)
        : this.$themeConfig.translate;
      baiduTranslate(secret, query, lang, (data) => {
        this.mustom$SetSpin(false);
        if (data.error) {
          this.isError = true;
          this.result = this.mustom$Locale.translate.error[data.error];
        } else {
          this.isError = false;
          this.result = data.result;
        }
        this.hasResult = true;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.Translate
  height 3rem
  overflow visible
  zIndex(32)
  transition transform 0.233s
  @media (max-width $smallestWidth)
    display none

.bar
  display grid
  grid-template-columns 3rem auto 3rem
  border-radius $borderRadius
  overflow hidden
  background transparent
  user-select none

.sq
  line-height 3
  text-align center
  background var(--bg)

.locales
  background var(--bg)
  display flex
  flex-direction row
  justify-content start
  position relative
  > div
    line-height 3
    padding 0 1rem
    cursor pointer
    color var(--link)
    position relative
    &:before
      content ''
      position absolute
      bottom 0
      left 0
      height 2px
      width 0
      background var(--underline)
      transition width 0.6s
    &:hover:before
      width 100%
  > span
    line-height 2.75
  .copied
    line-height 3
    position absolute
    right 0
    color var(--underline)

.highlight
  cursor help

.copy
  cursor pointer
  &:hover
    color var(--readme-more-txt)
    background var(--underline)

.result
  border-radius 0 0 $borderRadius $borderRadius
  background var(--bg)
  overflow hidden

.inner
  padding 0.5rem 1rem 0.75rem
  border $borderRadius solid var(--highlight)
  border-top none

.isHighlight
  padding 1rem 50vw
  margin -1rem -50vw
  background var(--translate-bg-highlight)

.error
  color brown
</style>