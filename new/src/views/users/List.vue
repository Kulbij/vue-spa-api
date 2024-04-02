<template>
      <div class="col-md-9">

          <div class="row list-users">

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

                            
                        </div>
                        <hr>
                    </div>

                    <div v-else class="empty-list">
                        <p>-- List posts is empty --</p>
                    </div>
              </div>
          </div>
              
      </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
      
  },
  computed: {
      ...mapGetters([
          "USERS",
      ])
  },
  methods: {
      ...mapActions([
          "ListUsers"
      ]),
  },
  created() {
      this.ListUsers()
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
