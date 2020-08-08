<template>
  <div class="Addin">
    <div
      :class="`top ${current === 'ad' ? 'current' : ''}`"
      @click="setCurrent('ad')"
      v-if="!!$themeConfig.images.ad"
    >
      <i class="fas fa-ad"></i>
    </div>
    <div
      :class="`bottom ${current === 'qrcode' ? 'current' : ''}`"
      @click="setCurrent('qrcode')"
      v-if="$themeConfig.qrcodes && $themeConfig.qrcodes.length"
    >
      <i class="fas fa-qrcode"></i>
    </div>
    <transition name="fade">
      <div class="floating" v-if="current !== ''">
        <div class="ad" v-if="current === 'ad' && !!$themeConfig.images.ad">
          <img :src="$withBase($themeConfig.images.ad)" />
        </div>
        <div class="qrcode" v-if="current === 'qrcode' && ($themeConfig.qrcodes instanceof Array)">
          <div v-for="(item, i) in $themeConfig.qrcodes" :key="i">
            <img :src="$withBase(item.path)" />
            <div v-html="item.locale[mustom$LangIndex]"></div>
          </div>
        </div>
        <div class="close" @click="clearCurrent">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Addin",
  data() {
    return {
      current: "",
    };
  },
  mounted() {
    if (!this.mustom$IsMobile) {
      this.current = "ad";
    }
  },
  methods: {
    setCurrent(name) {
      const ad = "ad";
      const qrcode = "qrcode";
      switch (name) {
        case ad:
          this.current = this.current === ad ? "" : ad;
          break;
        case qrcode:
          this.current = this.current === qrcode ? "" : qrcode;
          break;
        default:
          this.current = "";
      }
    },
    clearCurrent() {
      this.current = "";
    }
  },
};
</script>

<style lang="stylus" scoped>
.Addin
  zIndex(40)
  position fixed
  left 0
  bottom 0
  width $headerHeight
  height $headerHeight * 1.75
  user-select none
  transition transform 0.6s
  @media (max-width $smallestWidth)
    transform s('translate3d(%s, 0, 0)', $headerHeight * -1)

.top, .bottom
  width $headerHeight * 0.5
  line-height @width
  margin $headerHeight * 0.25
  text-align center
  background var(--bg)
  border-radius $borderRadius
  cursor pointer
  transition background 0.6s, color 0.6s
  &:hover
    color var(--link)
  &.current
    color var(--selection)

.floating
  position absolute
  left $headerHeight
  bottom $headerHeight * 0.25
  border-radius $borderRadius
  background white
  overflow hidden
  box-shadow 0 0 1px
  @media (max-width $smallestWidth)
    display none

.ad, .qrcode
  color black
  animation appear 0.6s

.ad
  max-width s('calc(50vw - %s)', $headerHeight)
  min-width $realSmallestWidth
  img
    display block
    width 100%

.qrcode
  display flex
  flex-direction row
  justify-content center
  flex-wrap nowrap
  overflow hidden
  transition background 0.6s, height 0.5s
  position relative
  text-align center
  > div
    margin 1rem
    margin-bottom 0.75rem
    line-height 1
    &:last-child
      margin-left 0
    &:hover > div
      animation shake 0.1s linear infinite

.close
  position absolute
  top 0
  right 0
  line-height 1rem
  font-size 0.7rem
  width 1.5rem
  text-align center
  background var(--link)
  color white
  cursor pointer
  overflow hidden
  border-radius 0 $borderRadius 0 $borderRadius
</style>