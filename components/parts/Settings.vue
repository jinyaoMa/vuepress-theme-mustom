<template>
  <div class="Settings card">
    <div class="caption">
      <span class="icon"><i class="fas fa-cog fa-fw"></i></span>
      <span v-html="mustom$Locale.settings.caption"></span>
    </div>
    <div class="inner">
      <div v-for="(setting, i) in $themeConfig.settings" :key="i">
        <span class="icon" v-html="setting.icon"></span>
        <span v-html="mustom$Locale.settings.names[setting.name]"></span>
        <div class="switch"></div>
      </div>
    </div>
    <div class="minimize"></div>
  </div>
</template>

<script>
export default {
  name: "Settigns"
};
</script>

<style lang="stylus" scoped>
.inner
  padding 0.5rem 0
  > div
    position relative
    padding 1rem
    line-height 1
    cursor pointer
    &:hover
      background var(--highlight)

.switch
  position absolute
</style>