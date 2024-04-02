<template>
  <AccountLayout
    :pageTitle="'Create tag'"
  >
    <div class="col-md-9">
        <router-link
            class="btn btn-lg btn-link"
            :to="{ name: 'AccountMyBlogTags' }"
        >
            <a>Back to tags</a>
        </router-link>
        
        <div class="card h-100">
            <div class="card-body">

                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Create tag</h6>
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <InputText
                            :id="'firstName'"
                            :type="'text'"
                            :label="'Name'"
                            :errorText="'Name error'"
                            :autocomplete="name"
                            :valid="validName"
                            v-model:value.trim="tag.name"
                            @keyup.enter="createTag"
                        />
                    </div>

                    

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isEnabled'"
                            :label="'Enabled'"
                            :errorText="'Enabled error'"
                            v-model="tag.is_enabled"
                        />
                    </div>
                    
                </div>

                
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">

                            <!-- <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button> -->

                            <Button
                                :class="'btn btn-primary'"

                                @click="createTag"
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
import InputCheckbox from "../../../components/parts/input-checkbox";


export default {
  components: {
    AccountLayout,
    InputText,
    InputCheckbox,
  },
  data() {
    return {
        tag: {
            name: '',
            is_enabled: false,
        },
    };
  },
  computed: {
  
  },
  methods: {
    ...mapActions([
        "SummonAlert",
        "CreateTag",
    ]),
    async createTag(event) {
        this.CreateTag(this.tag)
    },
  },
  async created() {

  },
};
</script>
