<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <AddArticle></AddArticle>
        <div class="panel-group">
          <h2>List Article:</h2>
          <div class="panel panel-primary" v-for="article in articles">
            <div class="panel-heading"> {{ article.title}}</div>
            <div class="panel-body">
              <p>Author: {{article.author.username}}</p>
              <p>Content: {{article.content}}</p>
              <p>Category: {{article.category}}</p>
            </div>
            <div class="panel-footer">
              <!-- now modal button for editing -->
              <button v-if="haveLogin" type="button" class="btn btn-default" data-toggle="modal" :data-target="'#myModal'+article._id">Edit Article</button>
              <!-- now modal e -->
              <div :id="'myModal'+article._id" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <!-- content modal -->
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h3 class="modal-title">Edit Article:</h3>
                  </div>
                  <div class="modal-body">
                    <form>
                        <div class="form-group">
                          <label class="control-label col-md-6">Article title:</label>
                          <input type="text" v-model="editObject.title" placeholder="new article title">
                        </div>
                        <div class="form-group">
                          <label class="control-label col-md-6">Article content:</label>
                          <input type="text" v-model="editObject.content" placeholder="new article content">
                        </div>
                        <div class="form-group">
                          <label class="control-label col-md-6">Article category:</label>
                          <input type="text" v-model="editObject.category" placeholder="new article category">
                        </div>
                        <button type="button" class="btn" @click="updateArticleNow(article._id)" data-dismiss="modal">submit</button>
                      </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
              <!-- end modal e -->
              <!-- delete in here -->
              <button v-if="haveLogin" type="button" class="btn btn-default" v-on:click="deleteArticleNow(article._id)">Delete</button>
            </div>
            <!-- end of panel footer -->

          </div>
        </div>
      </div>

      <!-- sort by category start here -->
      <div class="col-md-6">
        <h2>Show Article based on Category </h2>
        <div class="panel panel-primary" v-for="category in categories">
          <router-link :to="'/category/'+category.name">{{category.name}}</router-link>
        </div>
      </div>
      <!-- end here -->

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddArticle from '@/components/AddArticle'
export default {
  components: {
    AddArticle
  },
  data () {
    return {
      editObject: {
        title: '',
        content: '',
        category: ''
      },
      categories: [
        {name: 'komedi'},
        {name: 'laga'},
        {name: 'dewasa'}
      ]
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles
    },
    haveLogin () {
      return localStorage.getItem('token')
    }
  },
  methods: {
    ...mapActions([
      'findAllArticles',
      'deleteArticle',
      'updateArticle'
    ]),
    deleteArticleNow (id) {
      this.deleteArticle(id)
    },
    updateArticleNow (id) {
      console.log(id)
      var gabungan = {record: this.editObject, id: id}
      this.updateArticle(gabungan)
    }
  },
  created () {
    this.findAllArticles()
  }
}
</script>

<style lang="css">
.modal-body {
  background-color: white
}
</style>
