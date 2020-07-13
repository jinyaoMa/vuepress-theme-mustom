<template>
  <div class="Header">
    <div class="inner">
      <div
        :class="`btn btn-nav ${navActive}`"
        @click="$store.dispatch('setDrawer', 'nav')"
      >
        <i class="fas fa-stream"></i>
      </div>
      <div class="sitename">{{$store.getters.locale.sitename}}</div>
      <div
        :class="`btn btn-ext ${extActive}`"
        @click="$store.dispatch('setDrawer', 'ext')"
      >
        <i class="fas fa-cubes"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    navActive() {
      return this.$store.getters.drawer === 'nav' ? 'nav-active' : '';
    },
    extActive() {
      return this.$store.getters.drawer === 'ext' ? 'ext-active' : '';
    }
  }
};
</script>

<style lang="stylus" scoped>
.Header
  background-color var(--clr-bg)
  min-height $headerMinHeight
  max-height 100vh
  animation appear 0.6s ease-out
  position sticky
  top 0
  z-index 999999999
  &:after
    content ''
    position absolute
    bottom 0
    height 1px
    width 100%
    background-image var(--img-global-bg)

.inner
  line-height $headerMinHeight
  display grid
  grid-template-columns $headerMinHeight auto $headerMinHeight
  grid-template-rows $headerMinHeight
  text-align center
  font-size $headerMinHeight * 0.25

.sitename
  font-weight bold
  overflow hidden
  text-overflow ellipsis
  white-space nowrap

.btn
  cursor pointer
  user-select none
  margin $headerMinHeight * 0.25
  line-height $headerMinHeight * 0.5
  i
    transition color 0.2s

.btn-nav
  &:hover i
    color var(--clr-link)

.btn-ext
  &:hover i
    color var(--clr-underline)

.nav-active
  color var(--clr-link)

.ext-active
  color var(--clr-underline)

@media (max-width: 400px)
  .inner
    font-size ($headerMinHeight / 6)
</style>