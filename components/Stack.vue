<template>
  <div class="Stack card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-layer-group fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.stack.caption"></span>
    </div>
    <div class="inner">
      <ul class="top" v-if="list.length > 0">
        <li v-for="(item, i) in list" :key="i">
          <div
            :class="`cat ${isExtends[i] ? 'extIcon' : ''}`"
            v-html="item.name"
            @click="extend(item.path, i)"
          ></div>
          <ul :class="`low ${isExtends[i] ? 'extend' : ''}`">
            <li v-for="(line, j) in cache[i]" :key="j">
              <i class="far fa-file-code"></i>
              <a target="_blank" :href="line.html_url" :title="line.name">{{line.name}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
import { ajax } from "../utils";

export default {
  name: "Stack",
  props: ["user", "repo"],
  data() {
    return {
      list: [],
      isExtends: [],
      cache: [],
    };
  },
  methods: {
    extend(path, index) {
      if (this.isExtends[index]) {
        this.isExtends[index] = false;
        this.$forceUpdate();
      } else if (!this.cache[index]) {
        const that = this;
        ajax({
          url: `//api.github.com/repos/${this.user}/${
            this.repo
          }/contents/${encodeURIComponent(path)}`,
          method: "get",
          dataType: "json",
          headers: {
            accept: "application/vnd.github+json",
          },
          success(data) {
            that.cache[index] = data.filter((item) => item.type === "file");
            that.isExtends[index] = true;
            that.$forceUpdate();
          },
        });
      } else {
        this.isExtends[index] = true;
        this.$forceUpdate();
      }
    },
    init() {
      const that = this;
      ajax({
        url: `//api.github.com/repos/${this.user}/${this.repo}/contents`,
        method: "get",
        dataType: "json",
        headers: {
          accept: "application/vnd.github+json",
        },
        success(data) {
          that.list = data.filter((item) => item.type === "dir");
          that.isExtends = [];
          that.cache = [];
        },
      });
    },
  },
  watch: {
    repo() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="stylus" scoped>
>>> .inner
  user-select none
  ul
    list-style none
  .top
    > li:not(:last-child)
      border-bottom 2px solid var(--bg)
  .low
    overflow-y hidden
    height 0
    color var(--readme-more-bg)
    background var(--readme-more-txt)
    > li
      line-height 2.5
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      &:not(:last-child)
        border-bottom 1px dashed
      i
        margin-right 0.25rem
      a
        color var(--readme-more-bg)
        &:before
          display none
        &:hover
          text-decoration underline
    &.extend
      height auto
      padding 0.5rem $gap
      @media (max-width $smallestWidth)
        padding 0 1rem
  .cat
    background var(--readme-more-bg)
    color var(--readme-more-txt)
    line-height 2.5
    padding 0 s('calc(1rem + %s)', $gap) 0 $gap
    @media (max-width $smallestWidth)
      padding 0 2rem 0 1rem
    cursor pointer
    overflow hidden
    text-overflow ellipsis
    position relative
    &:after
      content ''
      display block
      position absolute
      top 0.95em
      height 0.35em
      width 0.35em
      transform rotate(45deg)
      border-right 0.1em solid
      border-bottom 0.1em solid
      right $gap
      @media (max-width $smallestWidth)
        right 1rem
    &.extIcon:after
      top 1.2em
      transform rotate(-135deg)
</style>