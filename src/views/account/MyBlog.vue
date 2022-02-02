<template>
  <AccountLayout
      :pageTitle="'My blog'"
  >
      <div class="col-md-9">


          <div class=" row col-md-12">

              <div class="col-md-6 col-sm-6 col-lg-6">
                  <router-link
                      class="btn btn-lg btn-primary btn-block  login-button pull-right"
                      active-class="active"
                      data-toggle="list"
                      :to="{ name: 'accountPostCreate' }"
                  >
                      <a>
                          Create post

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg>

                      </a>
                  </router-link>
              </div>

              <div class="col-md-6 col-sm-6 col-lg-6">
                  <router-link
                      class="btn btn-lg btn-primary btn-block  login-button pull-right"
                      :to="{ name: 'AccountMyBlogCategories' }"
                  >
                      <a>Categories</a>
                  </router-link>
              </div>
          </div>

          <div class="row list-posts">

              <div class="col-lg-8">

                
                    <div
                        v-for="post in POSTS"
                        class="comment"
                    >

                        <div class="comment-body">
                            <p class="comment-text">
                                {{ post.name }}
                            </p>
                            <p class="comment-text">
                                {{ post.description }}
                            </p>
                            <div class="comment-footer">
                                <span class="comment-meta">Daniel Adams</span>

                                <br>
                                <small v-text="post.created_at"></small>
                            </div>

                            <div class="button-section">
                                

                                <router-link
                                    class="edit-post"
                                    :to="{
                                        name: 'AccountPostEdit',
                                        params:  {
                                            id: post.id
                                        }
                                    }"
                                >
                                    <a>Edit</a>
                                </router-link>

                                <a
                                    href="javascript:;"
                                    class="delete-post"
                                    @click="deletePost(post.id)"
                                >
                                    delete
                                </a>
                              </div>
                        </div>
                        <hr>
                    </div>


              </div>
          </div>
              
      </div>
  </AccountLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AccountLayout from "../../components/AccountLayout";

export default {
  components: {
      AccountLayout
  },
  data() {
      return {
          posts: {}
      };
  },
  computed: {
      ...mapGetters([
          "POSTS",
      ])
  },
  methods: {
      ...mapActions([
          "ListPosts",
          "DeletePost",
      ]),
      deletePost(postId) {
          this.DeletePost(postId);
      }
  },
  created() {
      this.ListPosts()
  }
};
</script>

<style lang="scss">
.list-posts {
  margin-top: 30px;
}

.button-section {
  dispaly: flex;
  margin-top: 10px;

  .edit-post, .delete-post {
    padding: 10px;
  }
}
</style>
