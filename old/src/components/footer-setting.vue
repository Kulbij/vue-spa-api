<template>
  <footer class="s-text-caption">
    <div class="text">
      <template v-for="(item, index) in OTHER_TRANSLATE?.footer?.text" :key="index">
        <a v-if="item?.link && item?.link != ''" :href="item?.link" target="_blank" :class="item?.color">{{ item?.text }}</a>
        <span v-else :class="item?.color">{{ item?.text }}</span>
      </template>
    </div>
    <div class="contacts">
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
      <span>{{ OTHER_TRANSLATE?.footer?.phone_text }}</span>
      &ensp; <a :href="`tel:${OTHER_TRANSLATE?.footer?.phone}`" class="blue phone-link"> {{ OTHER_TRANSLATE?.footer?.phone }}</a>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["OTHER_TRANSLATE"])
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  text-transform: uppercase;
  color: var(--dark-100);
  a.phone-link {
    text-decoration: none;
    color: var(--blue-main);
  }
  .text {
    padding-right: 20px;
    a {
      text-decoration: none;
      color: var(--dark-100);
    }
    a,
    span {
      border-bottom: 1px solid transparent;
      transition: border-color 250ms ease;
    }
    .blue {
      color: #3cafe9 !important;
      &:hover {
        border-color: #3cafe9 !important;
      }
    }
    .green {
      color: #4aae31 !important;
      &:hover {
        border-color: #4aae31 !important;
      }
    }
    .brown {
      color: #832431 !important;
      &:hover {
        border-color: #832431 !important;
      }
    }
    .violet {
      color: #3cafe9 !important;
      &:hover {
        border-color: #3cafe9 !important;
      }
    }
  }
  .contacts {
    svg {
      min-width: 16px;
    }
  }
}
.contacts {
  display: flex;
  align-items: center;
  color: var(--dark-40);
  flex-shrink: 0;
  a {
    display: flex;
    align-items: center;
  }
  svg {
    transition: 0.4s;
    color: var(--dark-40);
    cursor: pointer;
    margin-right: 20px;
    &:hover {
      color: var(--blue-main);
    }
  }
}
@media (max-width: 1439px) {
  footer {
    flex-direction: column-reverse;
    .contacts {
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 375px) {
  footer {
    .contacts {
      flex-wrap: wrap;
      svg {
        margin-right: 5px;
      }
    }
  }
}
</style>
