<template>
  <header :class="{ show: LINKS }">
    <nav :id="id">
      <img v-if="OTHER_TRANSLATE?.header?.logo" @click="toOut" :src="OTHER_TRANSLATE?.header?.logo" alt="logo" class="logo" />
      <div class="links-container" v-click-outside="closeLinks">
        <div class="links-btn" @click="showLinks">
          <div v-show="!LINKS">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="5.3" x2="21" y2="5.3" stroke="black" stroke-width="1.4" />
              <line x1="3" y1="11.3" x2="21" y2="11.3" stroke="black" stroke-width="1.4" />
              <line x1="3" y1="17.3" x2="21" y2="17.3" stroke="black" stroke-width="1.4" />
            </svg>
          </div>
          <div v-show="LINKS">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M5 5L19 19" stroke="#000E29" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div v-if="OTHER_TRANSLATE?.navigation" class="links-box s-text-caption" :class="{ active: LINKS }">
          <router-link v-if="OTHER_TRANSLATE?.navigation?.employee && USER.role.id == 2" class="link" :to="{ name: 'Employees' }">
            {{ OTHER_TRANSLATE?.navigation?.employee }}
            <span></span>
          </router-link>
          <router-link v-if="OTHER_TRANSLATE?.navigation?.history" class="link" :to="{ name: 'OrderHistory' }">
            {{ OTHER_TRANSLATE?.navigation?.history }}
            <span></span>
          </router-link>
          <router-link v-if="OTHER_TRANSLATE?.navigation?.dishes" class="link" :to="{ name: 'Dishes' }">
            {{ OTHER_TRANSLATE?.navigation?.dishes }}
            <span></span>
          </router-link>
          <router-link v-if="OTHER_TRANSLATE?.navigation?.settings" class="link" :to="{ name: 'Settings' }">
            {{ OTHER_TRANSLATE?.navigation?.settings }}
            <span></span>
          </router-link>
          <div class="links-box-footer">
            <a v-if="OTHER_TRANSLATE?.footer?.social?.facebook" :href="OTHER_TRANSLATE?.footer?.social?.facebook">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33203 1.3335H12.6651C13.7697 1.3335 14.6651 2.22893 14.6651 3.3335V4.66674V12.6665C14.6651 13.771 13.7697 14.6665 12.6651 14.6665H11.3319H9.1504V10.1338H10.8701L11.1975 8.00017H9.1504V6.61472C9.1504 6.03107 9.43641 5.46201 10.3534 5.46201H11.2841V3.64649C11.2841 3.64649 10.4394 3.50244 9.63166 3.50244C7.94501 3.50244 6.84379 4.52419 6.84379 6.37394V8.00017H4.96875V10.1338H6.84379V14.6665H4.66542H3.33218C2.22761 14.6665 1.33218 13.771 1.33218 12.6665V4.66674L1.33203 3.33372C1.33191 2.22906 2.22737 1.3335 3.33203 1.3335Z" fill="currentColor" />
              </svg>
            </a>
            <a v-if="OTHER_TRANSLATE?.footer?.social?.instagram" :href="OTHER_TRANSLATE?.footer?.social?.instagram">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9981 1.3335H3.9987C2.52582 1.3335 1.33186 2.52759 1.33203 4.00047L1.33211 4.66666V11.9995C1.33211 13.4722 2.52601 14.6661 3.99877 14.6661H4.66527H11.3316H11.9981C13.4709 14.6661 14.6648 13.4722 14.6648 11.9995V4.66666V4.00016C14.6648 2.5274 13.4709 1.3335 11.9981 1.3335ZM11.9984 8.00016C11.9984 10.2093 10.2075 12.0002 7.9984 12.0002C5.78926 12.0002 3.9984 10.2093 3.9984 8.00016C3.9984 5.79102 5.78926 4.00016 7.9984 4.00016C10.2075 4.00016 11.9984 5.79102 11.9984 8.00016ZM10.6651 8.00016C10.6651 9.47292 9.47116 10.6668 7.9984 10.6668C6.52564 10.6668 5.33173 9.47292 5.33173 8.00016C5.33173 6.5274 6.52564 5.3335 7.9984 5.3335C9.47116 5.3335 10.6651 6.5274 10.6651 8.00016ZM13.0807 3.5835C13.0807 3.21531 12.7823 2.91683 12.4141 2.91683C12.0459 2.91683 11.7474 3.21531 11.7474 3.5835V3.5845C11.7474 3.95269 12.0459 4.25116 12.4141 4.25116C12.7823 4.25116 13.0807 3.95269 13.0807 3.5845V3.5835Z" fill="currentColor" />
              </svg>
            </a>
            <p class="s-text-alert">
              {{ OTHER_TRANSLATE?.footer?.phone_text }}&ensp;<a class="blue" :href="`tel:${OTHER_TRANSLATE?.footer?.phone}`">{{ OTHER_TRANSLATE?.footer?.phone }}</a>
            </p>
          </div>
        </div>
      </div>
      <div v-if="showUser == true" class="user-box s-text-caption">
        <div class="user">
          <span @click="selectUser"
            >{{ user.name }} <template v-if="userGuest == 0">{{ user.last_name }}</template></span
          >
          <div>
            <svg @click="selectUser" v-if="USER?.role.id == 2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10L11.2929 13.2929C11.6834 13.6834 12.3166 13.6834 12.7071 13.2929L16 10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            <slot v-if="!LINKS" name="introduction"></slot>
          </div>
        </div>
        <div class="limit" :class="{ show: LINKS }">{{ OTHER_TRANSLATE?.user?.limit?.label }} {{ user?.limit }} ₴ {{ OTHER_TRANSLATE?.user?.limit?.day }}</div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: String
    },
    showUser: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters(["OTHER_TRANSLATE", "USER", "SELECT_USER", "LINKS"]),
    user() {
      let x = {
        name: this.SELECT_USER?.name || this.OTHER_TRANSLATE?.user?.name,
        last_name: this.SELECT_USER?.last_name || this.OTHER_TRANSLATE?.user?.last_name
      };
      if (this.SELECT_USER) {
        x.limit = this.SELECT_USER?.limit?.sum ? this.SELECT_USER?.limit?.sum : "0";
      } else {
        x.limit = this.OTHER_TRANSLATE?.user?.limit?.sum;
      }

      return x;
    },
    userGuest() {
      return this.SELECT_USER?.is_guest || this.USER?.is_guest;
    }
  },
  methods: {
    ...mapActions(["OtherTranslate"]),
    selectUser() {
      if (this.USER.role.id == 2) this.$emit("selectUser");
    },
    toOut() {
      this.USER ? this.$router.push({ name: "Dishes" }) : this.$router.push({ name: "Main" });
    },
    menuRemove() {
      const body = document.querySelector("body");
      body.classList.remove("overflowed-sett");
    },
    showLinks() {
      this.$store.commit("Set_Links", !this.LINKS);
      const body = document.querySelector("body");
      body.classList.toggle("overflowed-sett");
    },
    closeLinks() {
      const body = document.querySelector("body");
      body.classList.remove("overflowed-sett");
      this.$store.commit("Set_Links", false);
    }
  },
  created() {
    this.OtherTranslate();
  },
  watch: {
    "$route.path"() {
      this.menuRemove();
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
.blue {
  color: var(--blue-main);
}
.links-box-footer {
  display: none;

  a {
    text-decoration: none;
  }

  p {
    color: var(--dark-40);
  }
}
nav {
  background: var(--white-100);
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.links-btn {
  display: none;
}
.links-box {
  z-index: 5;
  padding-top: 2px;
  color: var(--dark-100);
  display: flex;
  height: 100%;
  margin-left: 4px;
}
.link {
  color: var(--dark-100);
  position: relative;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  text-decoration: none;
  transition: 0.2s ease-out;
  &:hover {
    color: var(--blue-main);
  }
  @media (min-width: 1025px) {
    &:first-child {
      margin-left: 19px;
    }
  }
  &.router-link-active {
    color: var(--blue-main);
    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 1px;
      background: var(--blue-main);
    }
  }
}
.user-box {
  // margin-right: 93px;
  max-width: 315px;
  width: 100%;
  margin-left: auto;
  height: 100%;
  display: flex;
  padding-top: 5px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.user {
  position: relative;
  cursor: pointer;
  margin-bottom: -3px;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  span {
    transition: 0.2s ease;
  }

  & > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    position: absolute;
    left: 100%;
    color: var(--blue-main);
  }

  &:hover {
    span {
      color: var(--blue-main);
    }
  }
}
.limit {
  color: var(--blue-main);
  position: relative;
  bottom: 2px;
}
.links-container {
  height: 100%;
}
@media (max-width: 1024px) {
  .user > div {
    position: static;
  }
  .user-box {
    margin: 0 auto;
    padding: 0 0 2px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: auto;
    .limit {
      transition: 0.3s;
      min-width: calc(100% - 24px);
      bottom: 0;
      height: auto;
      text-transform: uppercase;
      display: flex;
      visibility: hidden;
      opacity: 0;
      height: 0;
      &.show {
        visibility: visible;
        opacity: 1;
        height: auto;
      }
    }
  }
  .links-btn {
    display: flex;
    cursor: pointer;
    height: 24px;
    &:focus {
      outline: none;
    }
    & svg:focus {
      outline: none;
    }
  }
  .links-container {
    height: auto;
    margin-left: 0;
    &:focus {
      outline: none;
    }
    order: 1;
    position: relative;
  }
  .links-box {
    transform-origin: 100% 0;
    transform: scale(0.2);
    transition: 0.3s;
    visibility: hidden;
    opacity: 0;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 72px;
    left: 0;
    padding: 20px;
    background: var(--white-100);
    height: calc(100vh - 72px);
    box-shadow: none;
    padding: 0;
    padding-top: 108px;
    margin: 0;
    overflow-y: auto;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }
  }
  .link {
    cursor: pointer;
    display: block;
    margin-bottom: 5px;
    text-align: center;
    margin-left: 0;
    height: auto;
    font-family: "Aeonik Pro Regular", sans-serif;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0.01em;
    color: var(--dark-100);
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    &.router-link-active span {
      display: none;
    }
  }
  .links-box-footer {
    margin-top: auto;
    display: flex;
    padding: 5px 0px 15px;
    justify-content: center;
    align-items: center;
    p {
      white-space: nowrap;
      text-transform: uppercase;
    }
    a {
      height: 16px;
      margin-right: 10px;
      &:first-child {
        margin-right: 10px;
      }
    }
    svg {
      color: var(--dark-40);
    }
  }
  nav {
    z-index: 200;
  }

  @media (max-width: 375px) {
    .link {
      font-size: 18px;
    }
    .links-box-footer {
      p {
        font-size: 12px;
      }
    }
  }
  .ios .links-box-footer,
  .mac-os .links-box-footer {
    padding-bottom: 130px;
  }
}
</style>
