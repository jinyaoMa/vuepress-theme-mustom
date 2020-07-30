<template>
  <div class="Archive">
    <Timeline />
    <Comment />
  </div>
</template>

<script>
import Timeline from "@theme/components/Timeline";
import Comment from "@theme/components/Comment";

export default {
  name: "Archive",
  components: {
    Timeline,
    Comment
  },
};
</script>

<style lang="stylus" scoped>
.Archive
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0
</style>