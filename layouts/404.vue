<template>
  <div class="NotFound">
    <div class="card">
      <div class="caption">
        <span class="icon">
          <i class="fas fa-exclamation-circle fa-fw"></i>
        </span>
        <span v-html="mustom$Locale.notfound.caption"></span>
      </div>
      <div class="inner" v-html="text"></div>
      <div class="minimize" @click="mustom$ToggleMinimize"></div>
    </div>
    <Hitokoto />
  </div>
</template>

<script>
import Hitokoto from "@theme/components/Hitokoto";

export default {
  name: "NotFound",
  components: {
    Hitokoto,
  },
  computed: {
    text() {
      if (typeof window === "undefined") return;
      return this.mustom$Locale.notfound.text.replace(
        "[:path:]",
        window.location.pathname
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.NotFound
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0

.inner
  padding $gap
  @media (max-width $smallestWidth)
    padding 1rem
  text-align center
  font-size 2rem
</style>