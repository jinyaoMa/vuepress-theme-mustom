<template>
  <div class="Botter">
    <Goingto />
  </div>
</template>

<script>
import Goingto from "./partials/Goingto";

export default {
  name: "Botter",
  components: {
    Goingto
  }
};
</script>

<style lang="stylus" scoped>
.Botter
  position sticky
  top s('calc(100vh - %s)', $botterHeight)
</style>