<template lang="html">
  <div class="container">
    <a href="#" v-for="categoryarticle in categoryArticles" class="list-group-item">
    <p class="list-group-item-text">{{categoryarticle.title}}</p>
    <p class="list-group-item-text">{{categoryarticle.content}}</p>
    <p class="list-group-item-text">{{categoryarticle.category}}</p>
    <p class="list-group-item-text">author: {{categoryarticle.author.username}}</p>
    <button type="button" class="btn btn-info" name="button">click here to back</button>
    </a>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  props: ['category'],
  data () {
    return {
      categoryArticles: []
    }
  },
  created: function () {
    const self = this
    axios.get(`http://localhost:3000/articles/category/${this.category}`)
    .then(response => {
      self.categoryArticles = response.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
</style>
