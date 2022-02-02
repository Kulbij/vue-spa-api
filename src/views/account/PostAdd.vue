<template>
  <AccountLayout
    :pageTitle="'Create post'"
  >
    <div class="col-md-9">
        <router-link
            class="btn btn-lg btn-link"
            to="/account/blog"
        >
            <a>Back to posts</a>
        </router-link>
        
        <div class="card h-100">
            <div class="card-body">

                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 class="mb-2 text-primary">Create post</h6>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <InputText
                            :id="'firstName'"
                            :type="'text'"
                            :label="'Name'"
                            :errorText="'First name error'"
                            :autocomplete="name"
                            :valid="validName"
                            v-model:value.trim="post.name"
                            @keyup.enter="createPost"
                        />
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <InputTextarea
                            :id="'description'"
                            :label="'Description'"
                            :errorText="'Description error'"
                            :autocomplete="description"
                            v-model:value.trim="post.description"
                        />
                    </div>

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Dropdown
                            :id="'category'"
                            :label="'Category'"
                            :errorText="'Category error'"
                            v-model:value.trim="post.category_id"
                            :options="{
                                0: {

                                    name: 'test'
                                }
                            }"
                        />
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isEnabled'"
                            :label="'Enabled'"
                            :errorText="'Enabled error'"
                            v-model:value.trim="post.is_enabled"
                            @keyup.enter="createPost"
                        />
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isPublished'"
                            :label="'Published'"
                            :errorText="'Published error'"
                            v-model:value.trim="post.is_published"
                            @keyup.enter="createPost"
                        />
                    </div>
                    
                </div>

                
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">

                            <!-- <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button> -->

                            <Button
                                :class="'btn btn-primary'"

                                @click="createPost"
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
import AccountLayout from "../../components/AccountLayout";
import InputText from "../../components/parts/input-text";
import InputTextarea from "../../components/parts/input-textarea";
import InputCheckbox from "../../components/parts/input-checkbox";
import Dropdown from "../../components/parts/dropdown";

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
        post: {
            name: '',
            description: '',
            category_id: '',
            tags: [],
            is_enabled: false,
            is_published: false,
            category_id: '',
        },
    };
  },
  computed: {
      ...mapGetters([
          "USER",
          "CATEGORIES",
      ]),
  },
  methods: {
    ...mapActions([
        "SummonAlert",
        "CreatePost",
        "SetBlogPage",
        "ListCategories",
    ]),
    async createPost(event) {
        this.CreatePost(this.post)
    },
  },
  async created() {
    //this.SetBlogPage(true);

    this.ListCategories();

    if (this.CATEGORIES) {
        alert('ok')
    }
  },
};
</script>
