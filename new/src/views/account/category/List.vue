<template>
  <AccountLayout
      :pageTitle="'My blog'"
  >
      <div class="col-md-9">


          <div class=" row col-md-12">
              <div class="col-md-6 col-sm-6 col-lg-6">
                  <router-link
                      class="btn btn-lg pull-right"
                      active-class="active"
                      data-toggle="list"
                      :to="{ name: 'AccountMyBlog' }"
                  >
                      <a>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                          </svg>

                          Back to blog
                      </a>
                  </router-link>
              </div>


              <div class="col-md-6 col-sm-6 col-lg-6">
                  <router-link
                      class="btn btn-lg btn-primary btn-block  login-button pull-right"
                      active-class="active"
                      data-toggle="list"
                      :to="{ name: 'AccountCategoryCreate' }"
                  >
                      <a>
                          Create category

                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg>

                      </a>
                  </router-link>
              </div>
          </div>

          <div class="row list-posts">

              <div class="col-lg-8">

                
                    <div
                        v-for="category in CATEGORIES"
                        class="comment"
                    >

                        <div class="comment-body">
                            <p class="comment-text">
                                {{ category.name }}
                            </p>
                            <div class="comment-footer">
                                <span class="comment-meta">Daniel Adams</span>

                                <br>
                                <small v-text="category.created_at"></small>
                            </div>

                            <div class="button-section">
                                

                                <router-link
                                    class="edit-post"
                                    :to="{
                                        name: 'AccountCategoryEdit',
                                        params:  {
                                            id: category.id
                                        }
                                    }"
                                >
                                    <a>Edit</a>
                                </router-link>

                                <a
                                    href="javascript:;"
                                    class="delete-post"
                                    @click="deleteCategory(category.id)"
                                >
                                    delete
                                </a>
                              </div>
                        </div>
                        <hr>
                    </div>

                    <div v-if="!CATEGORIES || CATEGORIES.length == 0" class="empty-list">
                        <p>-- List categories is empty --</p>
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
          categories: {}
      };
  },
  computed: {
      ...mapGetters([
          "CATEGORIES"
      ])
  },
  methods: {
      ...mapActions([
          "ListCategories",
          "DeleteCategory",
      ]),
      deleteCategory(categoryId) {
          this.DeleteCategory(categoryId);
      }
  },
  created() {
      this.ListCategories()
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
</style>
  