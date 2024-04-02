<template>
  <AccountLayout
    :pageTitle="'Edit category'"
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
                        <h6 class="mb-2 text-primary">Edit category</h6>
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <InputText
                            :id="'firstName'"
                            :type="'text'"
                            :label="'Name'"
                            :errorText="'First name error'"
                            :autocomplete="name"
                            v-model:value.trim="category.name"
                            @keyup.enter="updateCategory"
                        />
                    </div>

       

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isEnabled'"
                            :label="'Enabled'"
                            :errorText="'Enabled error'"
                            v-model="category.is_enabled"
                            @keyup.enter="updateCategory"
                        />
                    </div>
                    
                </div>

                
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">

                            <!-- <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button> -->

                            <Button
                                :class="'btn btn-primary'"

                                @click="updateCategory"
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

export default {
  components: {
    AccountLayout,
    InputText,
    InputTextarea,
    InputCheckbox,
  },
  data() {
    return {
        category: {
            name: '',
            is_enabled: '',
        }
    };
  },
  computed: {
      ...mapGetters([
          "ONE_CATEGORY",
      ]),
  },
  methods: {
    ...mapActions([
        "UpdateCategory",
        "GetOneCategory",
    ]),
    async updateCategory(event) {
        this.UpdateCategory(this.ONE_CATEGORY);
    },
  },
  async created() {
        await this.GetOneCategory(this.$route.params.id)
        
        if (this.ONE_CATEGORY) {
            this.category = this.ONE_CATEGORY;
        }
  },
};
</script>
