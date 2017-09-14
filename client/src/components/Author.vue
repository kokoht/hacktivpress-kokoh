<template lang="html">
  <div class="container">
    <a href="#" v-for="authorarticle in authorArticles" class="list-group-item">
    <p class="list-group-item-text">{{authorarticle.title}}</p>
    <p class="list-group-item-text">{{authorarticle.content}}</p>
    <p class="list-group-item-text">{{authorarticle.category}}</p>
    <p class="list-group-item-text">author: {{authorarticle.author.username}}</p>
    <button type="button" class="btn btn-info" name="button">click here to back</button>
    </a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['author'],
  data () {
    return {
      authorArticles: []
    }
  },
  created: function () {
    const self = this
    axios.get(`http://localhost:3000/articles/author/${this.author}`)
    .then(response => {
      self.authorArticles = response.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
</style>
