<template>
  <div class="Empty card" :style="style"></div>
</template>

<script>
export default {
  name: "Empty",
  computed: {
    style() {
      return this.$themeConfig.images && this.$themeConfig.images.empty
        ? {
            backgroundImage: `url('${this.$withBase(
              this.$themeConfig.images.empty
            )}')`,
          }
        : {};
    },
  },
};
</script>

<style lang="stylus" scoped>
.Empty
  background-color var(--highlight)
  background-image url('../statics/empty.png')
  background-repeat-x no-repeat
  background-position-x center
  min-height $emptyMinHeight
  @media (max-width $smallestWidth)
    display none
</style>