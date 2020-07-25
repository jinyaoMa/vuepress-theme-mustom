<template>
  <div class="Settings card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-cog fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.settings.caption"></span>
    </div>
    <div class="inner">
      <div
        v-for="(setting, i) in $themeConfig.settings"
        :key="i"
        @click="doSetting(setting.name)"
        :class="`${isChecked(setting.name) ? 'active' : ''} ${mustom$IsMobile && setting.name === 'nocanvas' ? 'hide' : ''}`"
      >
        <span class="icon" v-html="setting.icon"></span>
        <span v-html="mustom$Locale.settings.names[setting.name]"></span>
        <div class="switch"></div>
      </div>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Settigns",
  computed: {
    isChecked() {
      return function(name) {
        switch (name) {
          case "nightshift":
            return this.mustom$IsNight;
          case "nocanvas":
            return this.mustom$NoCanvas;
          case "language":
            return /^en-/i.test(this.mustom$Lang);
        }
      };
    }
  },
  methods: {
    doSetting(name) {
      switch (name) {
        case "nightshift":
          this.mustom$Nightshift();
          break;
        case "nocanvas":
          if (this.mustom$NoCanvas) {
            this.$root.$el.classList.remove('NO_CANVAS');
          } else {
            this.$root.$el.classList.add('NO_CANVAS');
          }
          this.mustom$ToggleCanvas();
          break;
        case "language":
          this.mustom$SwapLang();
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.Settings
  user-select none

.inner
  padding 0.5rem 0
  > div
    position relative
    padding 1rem
    line-height 1
    cursor pointer
    &:hover
      background var(--highlight)
    &.active .switch
      &:before
        background var(--txt)
        transform scale(3)
      &:after
        background var(--underline)
        transform scale(0.5)
        z-index 2

.switch
  position absolute
  width 2.5rem
  height 1.5rem
  overflow hidden
  top 0.75rem
  right 0.75rem
  border-radius $borderRadius
  &:before
    content ''
    position absolute
    top 0
    left 0
    height 1.5rem
    width 1.5rem
    border-radius $borderRadius
    background var(--txt)
    transition transform 0.2s, background 0.6s
    transform scale(0.5)
    z-index 2
  &:after
    content ''
    position absolute
    top 0
    right 0
    height 1.5rem
    width 1.5rem
    border-radius $borderRadius
    background var(--highlight)
    transition transform 0.2s, background 0.6s
    transform scale(3)
    z-index 1

.hide
  display none
</style>

<style lang="stylus">
#app.NO_CANVAS
  #live2d-widget
    opacity 0 !important
    transition opacity 0.6s
</style>