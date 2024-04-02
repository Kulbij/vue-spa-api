<template>
  <AccountLayout
    :pageTitle="'Create category'"
  >
    <div class="col-md-9">
        <router-link
            class="btn btn-lg btn-link"
            :to="{ name: 'AccountMyBlogCategories' }"
        >
            <a>Back to categories</a>
        </router-link>
        
        <div class="card h-100">
            <div class="card-body">

                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Create category</h6>
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <InputText
                            :id="'firstName'"
                            :type="'text'"
                            :label="'Name'"
                            :errorText="'First name error'"
                            :autocomplete="name"
                            :valid="validName"
                            v-model:value.trim="category.name"
                            @keyup.enter="createCategory"
                        />
                    </div>

                    

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isEnabled'"
                            :label="'Enabled'"
                            :errorText="'Enabled error'"
                            v-model="category.is_enabled"
                        />
                    </div>
                    
                </div>

                
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">

                            <!-- <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button> -->

                            <Button
                                :class="'btn btn-primary'"

                                @click="createCategory"
                            >Create</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </AccountLayout>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AccountLayout from "../../../components/AccountLayout";
import InputText from "../../../components/parts/input-text";
import InputTextarea from "../../../components/parts/input-textarea";
import InputCheckbox from "../../../components/parts/input-checkbox";
import Dropdown from "../../../components/parts/dropdown";

export default {
  components: {
    AccountLayout,
    InputText,
    InputTextarea,
    InputCheckbox,
    Dropdown,
  },
  data() {
    return {
        category: {
            name: '',
            is_enabled: false,
        },
    };
  },
  computed: {
      ...mapGetters([
          "USER",
      ]),
  },
  methods: {
    ...mapActions([
        "SummonAlert",
        "CreateCategory",
    ]),
    async createCategory(event) {
        this.CreateCategory(this.category)
    },
  },
  async created() {

  },
};
</script>
