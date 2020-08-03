<template>
  <div class="Iframe card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-grip-horizontal fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.iframe.caption"></span>
    </div>
    <div class="inner">
      <iframe
        :src="url"
        sandbox="allow-same-origin"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
      />
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Iframe",
  props: ["user", "repo"],
  data() {
    return {
      url: "#",
    };
  },
  methods: {
    init() {
      this.url = this.$frontmatter.github.iframe.url;
    },
  },
  watch: {
    repo() {
      this.init();
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="stylus" scoped>
iframe
  display block
  width 100%
  min-height 14rem
</style>
