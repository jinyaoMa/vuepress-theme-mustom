<template>
  <div class="Comment card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-comments fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.comment.caption"></span>
    </div>
    <div class="inner">
      <CommentPlugin :title="$title" :options="{ locale: mustom$Lang }" />
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";

export default {
  name: "Comment",
  components: {
    CommentPlugin: Comment,
  },
};
</script>

<style lang="stylus" scoped>
.inner
  padding $gap * 0.5
  @media (max-width $smallestWidth)
    padding 0

>>> .vssue
  color var(--txt)
  a
    color var(--link)
  .vssue-comment-avatar
    border-radius $borderRadius
    overflow hidden
    a
      &:before
        display none
  .vssue-pagination-select
    background-color white
</style>