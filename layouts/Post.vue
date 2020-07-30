<template>
  <div class="Post">
    <Article />
    <Comment />
  </div>
</template>

<script>
import Comment from "@theme/components/Comment";
import Article from "@theme/components/Article";

export default {
  name: "Post",
  components: {
    Comment,
    Article,
  },
};
</script>

<style lang="stylus" scoped>
.Post
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0
</style>