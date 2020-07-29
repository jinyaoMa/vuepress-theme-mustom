<template>
  <div class="Home">
    <Hitokoto />
    <Recent />
    <Comment />
  </div>
</template>

<script>
import Hitokoto from "@theme/components/Hitokoto";
import Recent from "@theme/components/Recent";
import Comment from "@theme/components/Comment";

export default {
  name: "Home",
  components: {
    Hitokoto,
    Recent,
    Comment,
  },
};
</script>

<style lang="stylus" scoped>
.Home
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0
</style>