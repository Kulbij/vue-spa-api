<template>
  <transition name="fade">
    <div class="alert-box s-text-alert" v-show="ALERT_VISIBILITY">
      <div class="alert-setting" :class="ALERT_STATUS">
        <div class="alert-setting-inner">
          <span class="alert-text">{{ ALERT_MESSAGE }}</span>
          <div class="close-alert" @click="close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M5 5L19 19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div v-if="ALERT_DECLINE" class="decline">
          <span @click="actionDecline">Отменить</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["ALERT_MESSAGE", "ALERT_STATUS", "ALERT_VISIBILITY", "ALERT_DECLINE", "ALERT_DATA"])
  },
  methods: {
    ...mapActions(["CloseAlert", "RestoreEmployee"]),
    close() {
      this.CloseAlert();
    },
    actionDecline() {
      this.RestoreEmployee({
        user: this.ALERT_DATA.user,
        company: this.ALERT_DATA.company
      });
      this.CloseAlert();
    }
  }
};
</script>

<style lang="scss" scoped>
.alert-text {
  display: contents;
  max-width: calc(100% - 29px);
}
.alert-box {
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 110;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  pointer-events: none;
}
.alert-setting {
  width: max-content;
  display: flex;
  align-items: flex-start;
  text-transform: uppercase;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Aeonik Pro Regular", sans-serif;
  font-weight: 400;
  color: var(--white-100);
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--dark-40);
  pointer-events: auto;

  &.success {
    background: var(--success);
  }
  &.error {
    background: var(--error);
  }
}
.alert-setting-inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.decline {
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  text-transform: uppercase;
  align-items: flex-start;

  span {
    cursor: pointer;
  }
}
.close-alert {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}
svg {
  cursor: pointer;
  color: var(--white-100);
  height: 16px;
  width: 16px;
  min-width: 16px;
  margin-left: 13px;
  margin-top: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transform: translate(-50%, 0px);
  transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -50px);
}
</style>
