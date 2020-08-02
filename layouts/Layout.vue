<template>
  <div class="Layout">
    <!-- author:jinyaoMa -->
    <Article />
    <Gallery v-if="$frontmatter.gallery && $frontmatter.gallery.enabled" />
    <Records v-if="$frontmatter.records && $frontmatter.records.enabled" />
    <Comment />
  </div>
</template>

<script>
import Comment from "@theme/components/Comment";
import Article from "@theme/components/Article";
import Gallery from "@theme/components/Gallery";
import Records from "@theme/components/Records";

export default {
  name: "Layout",
  components: {
    Comment,
    Article,
    Gallery,
    Records,
  },
};
</script>

<style lang="stylus" scoped>
.Layout
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0
</style>