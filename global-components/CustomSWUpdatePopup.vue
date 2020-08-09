<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div v-if="enabled" class="my-sw-update-popup">
      <div class="msg" v-html="message[mustom$LangIndex]"></div>
      <div>
        <button @click="reload">{{ buttonText[mustom$LangIndex] }}</button>
      </div>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup },
};
</script>

<style lang="stylus" scoped>
.my-sw-update-popup
  z-index 9999999999
  position fixed
  bottom 0
  right 0
  width 100%
  line-height 1
  padding 1.25rem
  border-radius $borderRadius $borderRadius 0 0
  color #ffffff
  background #3eaf7c
  display flex
  flex-direction row
  justify-content center
  text-shadow 0 0 1px white

.msg
  margin-right 1.25rem

button
  border none
  padding 0.5rem
  margin -0.5rem
  border-radius $borderRadius
  cursor pointer
  white-space nowrap
</style>