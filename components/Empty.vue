<template>
  <div class="Empty card"></div>
</template>

<script>
export default {
  name: "Empty"
};
</script>

<style lang="stylus" scoped>
.Empty
  background-color var(--highlight)
  background-image url('../statics/empty.min.png')
  background-repeat-x no-repeat
  background-position-x center
  min-height $emptyMinHeight
</style>