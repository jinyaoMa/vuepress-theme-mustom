<template>
  <div class="Toc card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-bookmark fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.toc.caption"></span>
    </div>
    <div class="inner" @mouseup="closeSmooth">
      <TOC :include-level="[1, 3]" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Toc",
  methods: {
    closeSmooth() {
      const html = document.querySelector(":root");
      const temp = html.style.scrollBehavior;
      html.style.scrollBehavior = "unset";
      window.setTimeout(() => {
        html.style.scrollBehavior = temp;
      }, 0);
    },
  },
};
</script>

<style lang="stylus" scoped>
.Toc
  user-select none
  @media (max-width $smallestWidth)
    display none

.inner
  padding 0.5rem 1rem
  max-height s('calc(100vh - %s - 2.3rem)', $headerHeight + $gap * 2)
  overflow-x hidden
  overflow-y auto
  @media (max-width $smallerWidth)
    max-height none
    overflow-y hidden

>>> ul
  list-style none

>>> a
  display block
  padding 0 1rem
  margin 0 -1rem
  line-height 2
  color var(--txt)
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  transition background 0.6s, color 0.3s
  &:before
    display none
  &:hover
    color var(--underline)
  &.router-link-exact-active
    color var(--article-language-txt)
    background var(--underline)
</style>