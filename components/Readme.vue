<template>
  <div class="Readme card">
    <div class="caption">
      <span class="icon">
        <i class="fab fa-readme fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.readme.caption"></span>
    </div>
    <div :class="`inner ${isExtend ? 'extend' : ''}`">
      <div class="content" v-html="content"></div>
      <div
        class="more"
        v-html="isExtend ? mustom$Locale.readme.less : mustom$Locale.readme.more"
        @click="extend"
      ></div>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
import { ajax } from "../utils";

export default {
  name: "Readme",
  props: ["user", "repo"],
  data() {
    return {
      isExtend: false,
      content: "",
    };
  },
  methods: {
    extend() {
      this.isExtend = !this.isExtend;
    },
    init() {
      const that = this;
      ajax({
        url: `//api.github.com/repos/${this.user}/${this.repo}/readme`,
        method: "get",
        headers: {
          accept: "application/vnd.github.v3.html",
        },
        success(data) {
          const dom = new DOMParser().parseFromString(data, "text/html");
          dom.querySelectorAll("a[aria-hidden]").forEach((a) => {
            a.remove();
          });
          dom.querySelectorAll("a:not([aria-hidden])").forEach((a) => {
            a.target = "_blank";
          });
          that.content = dom.body.firstElementChild.innerHTML;
        },
      });
    },
  },
  watch: {
    repo() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="stylus" scoped>
.inner
  position relative
  max-height 60vh // s('calc(100vh - 2.3rem - %s)', $headerHeight + $gap * 2)
  padding $gap * 1.5
  @media (max-width $smallestWidth)
    padding 1rem
  &.extend
    max-height none
    .more
      background var(--bg)
      color var(--readme-more-warn)
      &:hover
        color var(--readme-more-txt)
        background var(--readme-more-warn)

>>> .content
  margin-bottom s('calc(5rem - %s)', $gap * 1.5)
  @media (max-width $smallestWidth)
    margin-bottom 2.5rem
  h1
    text-align center
    padding-bottom 1rem
    margin-bottom $gap * 1.5
    @media (max-width $smallestWidth)
      margin-bottom 1rem

.more
  user-select none
  position absolute
  bottom 0
  left 0
  width 100%
  background var(--bg)
  color var(--link-markdown)
  text-align center
  line-height 3rem
  @media (max-width $smallestWidth)
    line-height 2.5rem
  cursor pointer
  &:hover
    color var(--readme-more-txt)
    background var(--readme-more-bg)
  &:before
    content ''
    position absolute
    top -2rem
    left 0
    width 100%
    height 2rem
    background linear-gradient(0deg, var(--bg), transparent)
    pointer-events none
    @media (max-width $smallestWidth)
      top -1rem
      height 1rem
</style>