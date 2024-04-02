<template>
<form>
    <div class="col-xs-12 col-md-12">
        <div
          :class="{
            'error-status': DOMAINS?.type == 'error',
            'success-status': DOMAINS?.type == 'success',
          }"
        >
          <small v-text="DOMAINERRORS?.data?.message || DOMAINS?.message"></small>
        </div>

        <div class="row">
            <div class="col-xs-6 col-md-6">
                <multiselect
                  :id="'target_domains'"
                  :label="'Target Domains'"
                  v-model="domain.target_domains"
                  :taggable="true"
                  :valid="validTargetDomains"
                  :errorText="this.errors.target_domains"
                  v-on:focus="inputFocused('target_domains')"
                  :key="'input-target_domains'"
                ></multiselect>
            </div>

            <div class="col-xs-6 col-md-6">
                <multiselect
                  :id="'excluded_targets'"
                  :label="'Excluded targets'"
                  v-model="domain.excluded_targets"
                  :taggable="true"
                  :valid="validExcludedTargets"
                  :errorText="DOMAINERRORS?.data?.errors?.excluded_targets"
                  v-on:focus="inputFocused('excluded_targets')"
                  :key="'input-excluded_targets'"
                ></multiselect>
            </div>
        </div>
        
    </div>

    <Button
        :class="'btn btn-lg btn-primary btn-block signup-btn register-button'"
        @click="sendForm"
        :disabled="isLoading"
    >
      <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span class="sr-only"> Send request</span>
    </Button>
</form>

<div v-if="DOMAINS?.type == 'success' && !DOMAINERRORS" class="table-responsive">
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Target Domain</th>
        <th scope="col">Referring Domain</th>
        <th scope="col">Excluded target</th>
        <th scope="col">Rank</th>
        <th scope="col">Backlinks</th>
        <th scope="col">Created</th>
        <th scope="col">Updated</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in DOMAINS?.data" :key="index" @click="toggleDomain(item)" style="cursor: pointer;"  data-bs-target="#myModal" data-bs-toggle="modal">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.target_domain }}</td>
        <td>{{ item.referring_domain }}</td>
        <td>{{ item.excluded_target.join(', ') }}</td>
        <td>{{ item.rank }}</td>
        <td>{{ item.backlinks }}</td>
        <td>{{ item.created_at }}</td>
        <td>{{ item.updated_at }}</td>
      </tr>
    </tbody>
  </table>
</div>

<div v-if="chouceDomain" class="py-2">
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ chouceDomain?.target_domain }}</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="table-responsive">
                      <table v-if="chouceDomain?.intersections" class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Backlinks</th>
                            <th scope="col">Created</th>
                            <th scope="col">Updated</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="(intersection, index) in chouceDomain?.intersections" :key="index" @click="toggleDetails(index)">
                            <th scope="row">{{ intersection.id }}</th>
                            <td>{{ intersection.rank }}</td>
                            <td>{{ intersection.backlinks }}</td>
                            <td>{{ intersection.created_at }}</td>
                            <td>{{ intersection.updated_at }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</div>
</template>

<script>

import Button from "../../components/parts/button";
import InputText from "../../components/parts/input-text";
import { mapActions, mapGetters } from "vuex";

import Multiselect from "../../components/parts/multiselect";

export default {
  components: {
    Button,
    InputText,
    Multiselect
  },
  data() {
    return {
        domain: {
            target_domains: [],
            excluded_targets: [],
        },
        chouceDomain: {},
        loader: false,
        errors: {
          target_domains: '',
            excluded_targets: '',
        },
        domainOptions: [],

        taggingOptions: [],
        selectedDomains: [],

        inputFocusedFields: [],
    };
  },
  computed: {
      ...mapGetters([
          "DOMAINERRORS",
          "DOMAINS",
      ]),

      validTargetDomains() {
          return this.validateDomain('target_domains');
      },

      validExcludedTargets() {
          return this.validateDomain('excluded_targets');
      },

      isLoading() {
          return !this.DOMAINS && this.loader;
      }
  },
  methods: {
    ...mapActions([
        "SummonAlert",
        'GetDomains',
    ]),

    async sendForm(event) {
        event.preventDefault();

        this.inputFocusedFields = [
          'target_domains',
          'excluded_targets',
        ];

        if (this.validTargetDomains && this.validExcludedTargets) {
            this.loader = true;

            await this.GetDomains({
                target_domains: this.domain.target_domains.reduce((domain, curr, index) => {
                  domain[index + 1] = curr.title;

                  return domain;
              }, {}),
                excluded_targets: this.domain.excluded_targets.reduce((domain, curr, index) => {
                  domain[index] = curr.title;

                  return domain;
              }, {}),
            });

            this.loader = false;
        }

        else {
            this.SummonAlert({ message: 'Error validation', type: "error" });

            this.loader = false;
        }
    },

    toggleDomain(item) {
        this.chouceDomain = item;
    },

    inputFocused(field) {
        if (!this.inputFocusedFields.includes(field)) {
          this.inputFocusedFields.push(field);
        }
    },

    validateDomain(field) {
        let options = this.domain[field];
        let isSuccess = true;

        if (!this.inputFocusedFields.includes(field)) return true;

        if (options.length == 0) {
            this.errors[field] = 'Required field.';

            return false;
        }

        options.forEach((option, key) => {
            if (!this.isValidateDomains(option.title, field)) {
              isSuccess = false;
            }
        });

        if (this.DOMAINERRORS?.data?.errors?.[field]) {
          this.errors[field] = this.DOMAINERRORS?.data?.errors?.[field][0];

          return false;
        }

        return isSuccess;
    },

    isValidateDomains(value, field) {
        this.errors[field] = '';

        if (!value.trim()) {
            this.errors[field] = 'Required field.';

            return false;
        }

        const domainRegex = /^(?:(?![_.-]{2})[a-zA-Z0-9-_]{1,63}(?<![-_])\.)+[a-zA-Z]{2,63}$/;
        if (!domainRegex.test(value)) {
            this.errors[field] = 'Invalid domain name format';

            return false;
        }

        return true;
    },

  },
  created() {
    
  }
};
</script>

<style lang="scss">
.error-status {
  background: red;
  padding: 5px;
  text-align: center;
}

.success-status {
  background: green;
  padding: 5px;
  text-align: center;
}

.sign-up-page {
  height: 100%;
  width: 100%;
  .left-box {
    max-width: 710px;
  }
  .content {
    padding: 49px 0 19px 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 740px) {
      &.confirmed {
        justify-content: center;
      }
    }
    @media (max-width: 740px) {
      &.confirmed {
        justify-content: flex-start;
      }
    }
    h2 {
      font-weight: 400;
      color: var(--dark-100);

      @media (min-width: 768px) {
        margin-bottom: 8px;
      }

      @media (max-width: 767px) {
        margin-bottom: 7px;
      }
    }
  }
  .title-hint {
    margin-bottom: 50px;
    color: var(--dark-40);
    font-size: 14px;
    letter-spacing: 0.43px;

    @media (max-width: 767px) {
      line-height: 24px;
    }
  }
  .form-inputs {
    display: flex;
    flex-wrap: wrap;
    .main {
      margin-bottom: 35px;
      width: 50%;
    }
    @media (min-width: 740px) {
      .input-box:first-child {
        margin-right: 20px;
      }
    }
    svg {
      color: var(--dark-40);
    }
    &:focus-within {
      svg {
        color: var(--blue-main);
      }
      .not-valid {
        svg {
          color: var(--error);
        }
      }
    }
  }
  .form-btns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    button {
      margin-right: 20px;
      margin-bottom: 20px;
    }
    button.white:hover {
      background: var(--bg-white);
      color: var(--blue-main);
    }
  }
  @media (max-width: 1024px) and (min-width: 760px) {
    .custom-select {
      margin-right: 20px;
    }
  }
  @media (max-width: 1024px) {
    .form-inputs .main {
      width: 100%;
    }
    .custom-select {
      width: 100%;
    }
    .left-box {
      min-width: 500px;
    }
    .form-inputs {
      flex-wrap: wrap;
      .main:first-child {
        margin-bottom: 30px;
      }
    }
    .content {
      padding-top: 85px;
    }
    .message-bottom {
      bottom: 20px;
    }
  }
  @media (max-width: 764px) {
    .content {
      padding-top: 36px;
    }
    .login-layout header {
      background: var(--white-100);
      padding: 12px 0 12px 21px;
      img {
        margin: auto 0;
      }
    }
    .right-box {
      background-color: var(--bg-main);
      position: absolute;
      top: 0;
      margin-top: 72px;
      max-height: 98px;
      min-height: 98px;
    }
    .content {
      padding-right: 20px;
    }
    .main {
      min-width: 200px;
    }
    .left-box {
      min-width: 320px;
      padding-top: 170px;
    }
    .message-bottom {
      top: 674px;
      p.m-text-des {
        padding-bottom: 20px;
      }
    }
  }
  @media (max-width: 370px) {
    .form-btns {
      flex-direction: column;
      align-items: flex-start;
      .white {
        margin-top: 20px;
      }
    }
  }
  .policy {
    display: block;
    color: var(--dark-40);
    font-size: 12px;
    margin-bottom: 20px;
    letter-spacing: 0.5px;

    &-link {
      color: var(--blue-main);
      text-decoration: none;
    }
  }
  .blue-text {
    color: var(--blue-main);
    font-family: "Aeonik Pro Regular", sans-serif;
  }

  .maxi-title {
    max-width: 494px;
  }
}
</style>
