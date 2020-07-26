<template>
  <div class="Audioplayer card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-music fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.audioplayer.caption"></span>
    </div>
    <div class="inner">
      <meting-js
        :server="$themeConfig.meting.server"
        :type="$themeConfig.meting.type"
        :id="$themeConfig.meting.id"
        :theme="$themeConfig.meting.theme"
        :list-max-height="$themeConfig.meting.height"
      ></meting-js>
    </div>
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
};
</script>

<style lang="stylus">
.aplayer.aplayer-withlist
  margin 0
  box-shadow none
  background none
  max-width 100vw
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