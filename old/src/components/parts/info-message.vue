<template>
  <div class="info-meassage m-text-food-title" :style="position">
    <slot> </slot>
    <div class="info-arrow" :class="arrowDir"></div>
  </div>
</template>

<script>
export default {
  props: {
    arrowDir: {
      type: String,
      default: "bc",
      validator(value) {
        return ["lt", "lc", "lb", "rt", "rc", "rb", "tl", "tc", "tr", "bl", "bc", "br"].includes(value);
      }
    },
    top: {
      type: String
    },
    left: {
      type: String
    },
    right: {
      type: String
    },
    bottom: {
      type: String
    }
  },
  computed: {
    position() {
      let position = "";

      this.top ? (position += `top: ${this.top};`) : "";
      this.left ? (position += `left: ${this.left};`) : "";
      this.right ? (position += `right: ${this.right};`) : "";
      this.bottom ? (position += `bottom: ${this.bottom};`) : "";

      return position;
    }
  }
};
</script>

<style lang="scss" scoped>
.info-meassage {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
  position: absolute;
  max-width: 286px;
  width: max-content;
  padding: 20px;
  color: var(--white-100);
  background: var(--blue-main);
  border-radius: 10px;
  box-shadow: var(--box-shadow-second);
  z-index: 4;
  &.show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
  }
  .info-arrow {
    position: absolute;
    border-color: transparent var(--blue-main);
    border-style: solid;
    border-width: 16px 13px 16px 0px;
    height: 0px;
    width: 0px;
  }
  .lt {
    top: 20px;
    left: -12px;
  }
  .lc {
    top: calc(50% - 14px);
    left: -12px;
  }
  .lb {
    bottom: 21px;
    left: -12px;
  }
  .rt {
    top: 20px;
    right: -12px;
    transform: rotate(180deg);
  }
  .rc {
    top: calc(50% - 14px);
    right: -12px;
    transform: rotate(180deg);
  }
  .rb {
    bottom: 21px;
    right: -12px;
    transform: rotate(180deg);
  }
  .tl {
    top: -22px;
    left: 25px;
    transform: rotate(90deg);
  }
  .tc {
    top: -22px;
    left: calc(50% - 12px);
    transform: rotate(90deg);
  }
  .tr {
    top: -22px;
    right: 29px;
    transform: rotate(90deg);
  }
  .bl {
    bottom: -18px;
    left: 25px;
    transform: rotate(-90deg);
  }
  .bc {
    bottom: -18px;
    left: calc(50% - 12px);
    transform: rotate(-90deg);
  }
  .br {
    bottom: -18px;
    right: 25px;
    transform: rotate(-90deg);
  }
}
</style>
