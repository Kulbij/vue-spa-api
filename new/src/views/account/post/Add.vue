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

                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <Dropdown
                            :id="'category'"
                            :label="'Category'"
                            :errorText="'Category error'"
                            v-model:value.trim="post.category_id"
                            :options="LIST_CATEGORIES"
                        />
                    </div>

                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 add-category">
                        <router-link
                            active-class="active"
                            data-toggle="list"
                            :to="{ name: 'AccountCategoryCreate' }"
                        >
                            <a>
                                Add
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </a>
                        </router-link>
                    </div>

                    <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                        <Multiselect
                            :id="'tags'"
                            :label="'Tags'"
                            :errorText="'Tags error'"
                            :multiple="true"
                            v-model="post.tags"
                            :options="TAGS"
                            :placeholder="'Select tags'"
                        />
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isEnabled'"
                            :label="'Enabled'"
                            :errorText="'Enabled error'"
                            v-model="post.is_enabled"
                            @keyup.enter="createPost"
                        />
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                        <InputCheckbox
                            :id="'isPublished'"
                            :label="'Published'"
                            :errorText="'Published error'"
                            v-model="post.is_published"
                            @keyup.enter="createPost"
                        />
                    </div>
                    
                </div>

                
                <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-right">

                            <button class="btn btn-secondary">Cancel</button>

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
import AccountLayout from "../../../components/AccountLayout";
import InputText from "../../../components/parts/input-text";
import InputTextarea from "../../../components/parts/input-textarea";
import InputCheckbox from "../../../components/parts/input-checkbox";
import Dropdown from "../../../components/parts/dropdown";
import Multiselect from "../../../components/parts/multiselect";

export default {
  components: {
    AccountLayout,
    InputText,
    InputTextarea,
    InputCheckbox,
    Dropdown,
    Multiselect,
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
        },
    };
  },
  computed: {
      ...mapGetters([
          "USER",
          "LIST_CATEGORIES",
          "TAGS",
      ]),
  },
  methods: {
    ...mapActions([
        "SummonAlert",
        "CreatePost",
        "SetBlogPage",
        "ListPostCategories",
        "ListTags",
    ]),
    async createPost(event) {
        this.CreatePost(this.post);
    },
    listTagOptions() {
        let tags = [];

        this.TAGS.forEach((item) => {
            tags.push(item.name);
        })

        return this.TAGS;
    },
  },
  async created() {
    //this.SetBlogPage(true);

    this.ListPostCategories();
    this.ListTags();
  },
};
</script>

<style lang="scss">
.add-category {
    margin: 0 auto;
    margin-top: 40px;
}
</style>
