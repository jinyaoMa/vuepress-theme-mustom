<template>
  <div :class="`Nav ${$store.getters.drawer}-active`">
    <div class="inner">
      <Brand />
      <Menu v-for="(menu, i) in $themeConfig.menus" :key="i" :menu="menu" />
      <Skin />
      <Settings />
    </div>
  </div>
</template>

<script>
import Brand from "./partials/Brand";
import Menu from "./partials/Menu";
import Skin from "./partials/Skin";
import Settings from "./partials/Settings";

export default {
  name: "Nav",
  components: {
    Brand,
    Menu,
    Skin,
    Settings
  }
};
</script>

<style lang="stylus" scoped>
.Nav
  user-select none
  overflow hidden
  height 0
  padding 0 $headerMinHeight
  opacity 0
  transition height 0.3s, padding 0.3s, opacity 0.3s
  background-color var(--clr-bg-dark)
  position relative

.nav-active
  height 846px // measure manually
  padding $headerMinHeight
  opacity 1
  @media (max-width: 1280px)
    height 1053px // measure manually
  @media (max-width: 900px)
    height 1835px // measure manually
  @media (max-width: 480px)
    height 1763px // measure manually
  @media (max-width: 321px)
    height 1619px // measure manually

.inner
  margin 0 auto
  max-width s('calc(%s + %s)', $navCardWidth * 3, $gap * 4)
  column-count 3
  column-gap $gap * 2
  column-fill balance

@media (max-width: 1280px)
  .inner
    max-width s('calc(%s + %s)', $navCardWidth * 2, $gap * 2)
    column-count 2

@media (max-width: 900px)
  .inner
    max-width $navCardWidth
    column-count 1

@media (max-width: 480px)
  .Nav
    padding $gap 0 $gap * 2

@media (max-width: 321px)
  .Nav
    padding $gap 0
</style>