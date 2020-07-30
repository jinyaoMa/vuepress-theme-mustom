<template>
  <div class="Audioplayer card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-music fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.audioplayer.caption"></span>
    </div>
    <div class="inner" v-html="metingJs"></div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
import "aplayer/dist/APlayer.min.css";

export default {
  name: "Audioplayer",
  mounted() {
    import("aplayer/dist/APlayer.min.js").then((m) => {
      window.APlayer = m.default;
      import("meting/dist/Meting.min");
    });
  },
  computed: {
    metingJs() {
      return (
        `<meting-js ` +
        `server="${this.$themeConfig.meting.server}"` +
        `type="${this.$themeConfig.meting.type}"` +
        `id="${this.$themeConfig.meting.id}"` +
        `theme="${this.$themeConfig.meting.theme}"` +
        `list-max-height="${this.$themeConfig.meting.height}"` +
        `></meting-js>`
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.caption, .minimize
  display none
  @media (max-width $smallestWidth)
    display block
</style>

<style lang="stylus">
.aplayer
  margin 0
  box-shadow none
  background none
  max-width 100vw
  &.aplayer-withlrc
    .aplayer-pic
      height 90px - $borderRadius * 2 // orig 90px
      width 90px - $borderRadius * 2 // orig 90px
      margin $borderRadius
      border-radius $borderRadius
  &.aplayer-withlist
    .aplayer-lrc
      &:before, &:after
        content none
    .aplayer-icon-menu, .aplayer-volume-wrap
      display none !important
    .aplayer-time.aplayer-time-narrow
      padding-right 4px
    .aplayer-list ol
      &::-webkit-scrollbar
        webkitScrollbar()
      &::-webkit-scrollbar-thumb
        webkitScrollbarThumb()
      li
        &:hover, &.aplayer-list-light
          background var(--highlight)
</style>