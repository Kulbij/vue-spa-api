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

              <div class="col-md-6 col-sm-6 col-lg-6 row">
                  <div class="col-md-6 col-sm-6 col-lg-6">
                      <router-link
                          class="btn btn-lg btn-block"
                          :to="{ name: 'AccountMyBlogCategories' }"
                      >
                          <a>Categories</a>
                      </router-link>
                  </div>

                  <div class="col-md-6 col-sm-6 col-lg-6">
                      <router-link
                          class="btn btn-lg btn-block"
                          :to="{ name: 'AccountMyBlogTags' }"
                      >
                          <a>Tags</a>
                      </router-link>
                  </div>
              </div>
          </div>

          <div class="row list-posts">

              <div class="col-lg-8">
                
                    <div
                        v-if="POSTS && POSTS.length > 0"
                        v-for="post in POSTS"
                        class="comment"
                    >

                        <div class="comment-body">
                            <div v-if="post.tags" class="comment-text post-tags">
                                <div v-for="tag in post.tags" class="post-tag">
                                    {{ tag.name }}
                                </div>
                            </div>

                            <p v-if="post.name" class="comment-text post-name">
                                {{ post.name }}
                            </p>
                            <p v-if="post.description" class="comment-text post-description">
                                {{ post.description }}
                            </p>
                            <div class="comment-footer">
                                <span
                                    v-if="post.category"
                                    class="comment-meta post-category"
                                >
                                   {{ post.category.name }}
                                </span>
                                <span v-else>
                                    - non category -
                                </span>

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

                    <div v-else class="empty-list">
                        <p>-- List posts is empty --</p>
                    </div>
              </div>
          </div>
              
      </div>
  </AccountLayout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AccountLayout from "../../../components/AccountLayout";

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
.empty-list {
  padding-top: 50px;

  p {
    text-align: center;
  }
}

.post-name {
  font-size: 18px;
}
.post-description {
  font-size: 14px;
  font-style: italic;
}
.post-category {
  font-size: 14px;
}

.post-tags {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: flex-start;

  .post-tag {
    font-size: 13px;
    padding: 5px;
  } 
}
</style>
