<template>
  <AccountLayout
    :pageTitle="'Edit post'"
  >
    <div class="col-md-9">
        <router-link
            class="btn btn-lg btn-link"
            :to="{ name: 'AccountMyBlog' }"
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

                                @click="update"
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

export default {
  components: {
    AccountLayout,
    InputText,
    InputTextarea,
    InputCheckbox,
  },
  data() {
    return {
        post: {
            name: '',
            description: '',
            is_enabled: '',
            is_published: '',
        }
    };
  },
  computed: {
      ...mapGetters([
          "ONE_POST",
      ]),
  },
  methods: {
    ...mapActions([
        "UpdatePost",
        "GetOnePost",
    ]),
    async update(event) {
        // alert(this.ONE_POST.is_enabled)

        this.UpdatePost(this.ONE_POST);
    },
  },
  async created() {
        await this.GetOnePost(this.$route.params.id)
        
        if (this.ONE_POST) {
            this.post = this.ONE_POST;
        }
  },
};
</script>
