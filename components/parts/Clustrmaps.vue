<template>
  <div class="Clustrmaps card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-map fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.clustrmaps.caption"></span>
    </div>
    <div class="inner">
      <script v-if="isIt" :id="$themeConfig.clustrmaps.id" ref="script"></script>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Clustrmaps",
  computed: {
    isIt() {
      return (
        this.$themeConfig.clustrmaps &&
        this.$themeConfig.clustrmaps.id &&
        this.$themeConfig.clustrmaps.src
      );
    },
  },
  mounted() {
    if (this.isIt) {
      this.$refs.script.src = this.$themeConfig.clustrmaps.src;
    }
  },
};
</script>

<style lang="stylus" scoped>
.inner
  padding 0.25rem
  >>> a:before
    display none
</style>