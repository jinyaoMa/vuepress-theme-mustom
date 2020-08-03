<template>
  <div class="Layout">
    <!-- author:jinyaoMa -->
    <Article />
    <Gallery v-if="$frontmatter.gallery && $frontmatter.gallery.enabled" />
    <Records v-if="$frontmatter.records && $frontmatter.records.enabled" />
    <Readme
      v-if="isGithubOk && $frontmatter.github.readme && $frontmatter.github.readme.enabled"
      :user="$frontmatter.github.user"
      :repo="$frontmatter.github.repo"
    />
    <Stack
      v-if="isGithubOk && $frontmatter.github.stack && $frontmatter.github.stack.enabled"
      :user="$frontmatter.github.user"
      :repo="$frontmatter.github.repo"
    />
    <Iframe
      v-if="isGithubOk && $frontmatter.github.iframe && $frontmatter.github.iframe.enabled"
      :user="$frontmatter.github.user"
      :repo="$frontmatter.github.repo"
    />
    <Comment />
  </div>
</template>

<script>
import Comment from "@theme/components/Comment";
import Article from "@theme/components/Article";
import Gallery from "@theme/components/Gallery";
import Records from "@theme/components/Records";
import Readme from "@theme/components/Readme";
import Stack from "@theme/components/Stack";
import Iframe from "@theme/components/Iframe";

export default {
  name: "Layout",
  components: {
    Comment,
    Article,
    Gallery,
    Records,
    Readme,
    Stack,
    Iframe,
  },
  computed: {
    isGithubOk() {
      return (
        this.$frontmatter.github &&
        this.$frontmatter.github.user &&
        this.$frontmatter.github.repo
      );
    },
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