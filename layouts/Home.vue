<template>
  <div class="Home">
    <Hitokoto />
    <Recent />
  </div>
</template>

<script>
import Hitokoto from "@theme/components/Hitokoto";
import Recent from "@theme/components/Recent";

export default {
  name: "Home",
  components: {
    Hitokoto,
    Recent
  }
};
</script>

<style lang="stylus" scoped>
.Home
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0
</style>