<template>
  <div :class="`Notification ${notification.type} ${notification.state}`">
    <div
      class="frame"
      @mouseover="stopNotificationTimeout"
      @mouseout="runNotificationTimeout"
    >
      <div class="inner">
        <div class="icon" v-html="icon"></div>
        <div class="msg" v-html="notification.msg"></div>
      </div>
    </div>
  </div>
</template>

<script>
const _private = {
  timer: null,
  show: "show",
  hide: "hide",
  second: 8888,
  callback: null,
};

export default {
  name: "Notification",
  data() {
    return {
      notification: {
        type: "default",
        msg: "DEFAULT",
        state: "hide",
      },
    };
  },
  computed: {
    icon() {
      switch (this.notification.type) {
        case "error":
          return `<i class="fas fa-exclamation fa-fw"></i>`;
        case "warning":
          return `<i class="fas fa-exclamation-triangle fa-fw"></i>`;
        default:
          return `<i class="fas fa-exclamation-circle fa-fw"></i>`;
      }
    },
  },
  methods: {
    stopNotificationTimeout() {
      window.clearTimeout(_private.timer);
    },
    runNotificationTimeout() {
      _private.timer = window.setTimeout(() => {
        window.clearTimeout(_private.timer);
        _private.timer = null;
        this.notification.state = _private.hide;
        if (typeof _private.callback === "function") {
          _private.callback(this.notification);
          _private.callback = null;
        }
      }, _private.second);
    },
    showNotification(type, msg, callback) {
      this.stopNotificationTimeout();
      if (typeof callback === "function") {
        _private.callback = callback;
      }
      this.notification.type = type;
      this.notification.msg = msg;
      this.notification.state = _private.show;
      this.runNotificationTimeout();
    },
  },
};
</script>

<style lang="stylus" scoped>
.Notification
  --tmp-default var(--readme-more-bg)
  --tmp-warning var(--records-yellow)
  --tmp-error var(--readme-more-warn)
  zIndex(0)
  position fixed
  top $headerHeight
  right 0
  pointer-events none
  user-select none
  margin $gap * 0.5 0
  width 100%
  &.hide .frame
    transform translate3d(100%, 0, 0)
    opacity 0
  .frame
    border-color var(--tmp-default)
    background linear-gradient(90deg, var(--tmp-default), transparent)
  .icon
    color var(--tmp-default)
  &.warning
    .frame
      border-color var(--tmp-warning)
      background linear-gradient(90deg, var(--tmp-warning), transparent)
    .icon
      color var(--tmp-warning)
  &.error
    .frame
      border-color var(--tmp-error)
      background linear-gradient(90deg, var(--tmp-error), transparent)
    .icon
      color var(--tmp-error)

.frame
  padding 2px 0
  border-left 0.5rem solid
  max-width s('calc(100vw - %s)', $floatingSize)
  float right
  pointer-events all
  transform translate3d(0, 0, 0)
  opacity 1
  transition background 0.3s, transform 0.3s, opacity 0.3s

.inner
  display grid
  height $notificationHeight
  grid-template-columns $notificationHeight auto
  grid-template-rows $notificationHeight
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  background var(--bg)
  line-height $notificationHeight

.icon
  text-align center

.msg
  padding-right s('calc(%s + 0.5rem)', $notificationHeight * 0.5)
  user-select text
</style>