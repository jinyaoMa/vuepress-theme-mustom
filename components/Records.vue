<template>
  <div class="Records">
    <div class="card" v-for="(item, i) in $frontmatter.records.items" :key="i">
      <div class="caption">
        <div class="frame">
          <span class="icon">
            <i class="fas fa-save fa-fw"></i>
          </span>
          <span>SAVE_{{item.date || 'N/A'}}</span>
        </div>
      </div>
      <div class="inner">
        <div class="cover" :style="coverStyle(item.cover)"></div>
        <div class="info">
          <div class="scroll">
            <div
              class="title"
              v-html="typeof item.title === 'string' && item.title.length > 0 ? item.title : 'N/A'"
            ></div>
            <div class="type" v-html="type(item.type)"></div>
          </div>
        </div>
      </div>
      <div class="minimize" @click="mustom$ToggleMinimize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Records",
  computed: {
    type() {
      return function (type) {
        
      }
    },
    coverStyle() {
      return function (img) {
        if (typeof img === "string" && img.length > 0) {
          return {
            backgroundImage: `url('${this.$withBase(img)}')`,
          };
        }
        return this.$themeConfig.images && this.$themeConfig.images.records
          ? {
              backgroundImage: `url('${this.$withBase(
                this.$themeConfig.images.records
              )}')`,
            }
          : {};
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.Records
  display grid
  gap $gap
  @media (max-width $smallestWidth)
    gap 0

.caption
  white-space nowrap
  padding-right 2.25rem

.frame
  overflow hidden
  text-overflow ellipsis

.inner
  display grid
  grid-template-columns $minWidth auto
  grid-template-rows $minWidth
  width 100%
  overflow-x auto
  overflow-y hidden

.cover
  background-image url('../statics/records.png')
  background-repeat no-repeat
  background-size contain
  background-position center
  border-radius $borderRadius
  margin $gap

.info
  padding-right $gap
  height 100%
  overflow-x hidden
  overflow-y auto

.scroll
  margin $gap 0
  border-left 0.5rem dashed var(--highlight)
  padding-left $gap

.title
  font-size 1.25rem
  font-weight 600
</style>