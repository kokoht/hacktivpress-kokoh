<template lang="html">
  <div class="col-md-12">
    <div v-if="!haveLogin" class="panel panel-default">
      <div class="panel-body"> To Add, Edit, Delete article, please login..
      </div>
    </div>

    <form v-if="haveLogin" @submit.prevent="addingArticle">
      <h3> Here to add Article: </h3>
      <div class="form-group">
        <label>Title: </label>
        <input type="text" v-model="addArticleObject.title" placeholder="new title" required>
      </div>
      <div class="form-group">
        <label>Content: </label>
        <input type="text" v-model="addArticleObject.content" placeholder="new content">
      </div>
      <div class="form-group">
        <label>Category: </label>
        <input type="text" v-model="addArticleObject.category" placeholder="new category">
      </div>
      <button type="submit" class="btn btn-info">Add Article</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      addArticleObject: {
        title: '',
        content: '',
        author: localStorage.getItem('id'),
        category: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createArticle'
    ]),
    addingArticle () {
      console.log(this.addArticleObject)
      this.createArticle(this.addArticleObject)
    }
  },
  computed: {
    haveLogin () {
      return localStorage.getItem('token')
    }
  }
}

</script>

<style lang="css">
</style>
