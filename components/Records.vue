<template>
  <div class="Records">
    <div class="card" v-for="(item, i) in $frontmatter.records.items" :key="i">
      <div class="caption">
        <div class="frame">
          <span class="icon">
            <i class="fas fa-save fa-fw"></i>
          </span>
          <span>SAVE_{{item.date || mustom$Locale.records.empty}}</span>
        </div>
      </div>
      <div class="inner">
        <div class="cover" :style="coverStyle(item.cover)"></div>
        <div class="info">
          <div class="scroll">
            <div
              class="title"
              v-html="typeof item.title === 'string' && item.title.length > 0 ? item.title : mustom$Locale.records.empty"
            ></div>
            <div class="type">
              <span class="label" v-html="mustom$Locale.records.labels.type"></span>
              <span class="field" v-html="type(item.type)"></span>
            </div>
            <div class="author">
              <span class="label" v-html="mustom$Locale.records.labels.author"></span>
              <span class="field" v-html="item.author || mustom$Locale.records.empty"></span>
            </div>
            <div class="source">
              <span class="label" v-html="mustom$Locale.records.labels.source"></span>
              <span class="field" v-html="item.source || mustom$Locale.records.empty"></span>
            </div>
            <div class="progress">
              <span class="label" v-html="mustom$Locale.records.labels.progress"></span>
              <div class="bar">
                <div
                  :style="progressStyle(item.progress)"
                >{{item.progress || mustom$Locale.records.empty}}</div>
              </div>
            </div>
            <div class="summary">
              <span class="label" v-html="mustom$Locale.records.labels.summary"></span>
              <div v-html="item.summary || mustom$Locale.records.empty"></div>
            </div>
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
    progressStyle() {
      return function (p) {
        const regex1 = /^\s*(\d+)\s*\/\s*(\d+)\s*$/; // 12/345
        const regex2 = /^\s*(\d+)%\s*$/; // 66%
        if (typeof p === "string" && p.trim().length > 0) {
          const matches1 = p.match(regex1);
          if (matches1 && matches1.length === 3) {
            const percentage =
              Math.round(
                (parseInt(matches1[1]) / parseInt(matches1[2])) * 10000
              ) / 100;
            const clrName = percentage > 60 ? "green" : "yellow";
            return {
              width: percentage + "%",
              background: `var(--records-${clrName})`,
            };
          }
          const matches2 = p.match(regex2);
          if (matches2 && matches2.length === 2) {
            const percentage = parseInt(matches2[1]);
            const clrName = percentage > 60 ? "green" : "yellow";
            return {
              width: percentage + "%",
              background: `var(--records-${clrName})`,
            };
          }
          return {
            width: "100%",
            background: `var(--records-green)`,
          };
        }
        return {};
      };
    },
    type() {
      return function (t) {
        if (typeof t !== "string" || t.trim().length === 0) {
          return this.mustom$Locale.records.empty;
        } else {
          if (this.mustom$Locale.records.types.hasOwnProperty(t)) {
            return this.mustom$Locale.records.types[t];
          } else {
            return t;
          }
        }
      };
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
  grid-template-columns s('calc(0.5rem + %s)', $minWidth) auto
  grid-template-rows $minWidth
  width 100%
  overflow-x auto
  overflow-y hidden

.cover
  background-image url('../statics/records.png')
  background-repeat no-repeat
  background-size contain
  background-position center
  margin $gap 0
  @media (max-width $smallestWidth)
    margin 1rem 0
  border-right 0.5rem dashed var(--highlight)

.info
  padding-right $gap
  @media (max-width $smallestWidth)
    padding-right 1rem
  min-width $minWidth
  height 100%
  overflow-x hidden
  overflow-y auto
  font-size 0.8rem

.scroll
  margin $gap 0
  padding-left $gap
  @media (max-width $smallestWidth)
    margin 1rem 0
    padding-left 1rem
  > div
    word-break break-all

.title
  font-size 1.25rem
  font-weight 700
  line-height 1
  padding-bottom 0.75rem
  word-break normal

.label
  font-weight 666

.field
  display inline-block
  line-height 1.25
  margin 0.2rem 0 0.4rem

.bar
  width 100%
  height 1.6rem
  line-height 1.6rem
  margin 0.25rem 0
  background var(--highlight)
  word-break normal
  > div
    height 100%
    text-align right
    padding 0 0.4rem
    min-width min-content
    width 0
    max-width 100%
    font-style italic
    font-weight bold

.summary > div
  margin-top 0.2rem
  line-height 1.5
  word-break normal
</style>