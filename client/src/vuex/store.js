import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    id: localStorage.getItem('id'),
    articles: [],
    article: ''
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setArticle (state, payload) {
      state.article = payload
    },
    addArticle (state, payload) {
      state.articles.push(payload)
    },
    refreshAfterDelete (state, id) {
      const afterDeleteData = state.articles.filter(function (article) {
        return article._id !== id
      })
      state.articles = afterDeleteData
    }
  },
  actions: {
    findAllArticles ({commit}) {
      axios.get('http://localhost:3000/articles')
      .then(response => {
        commit('setArticles', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    findByIdArticle ({commit}, id) {
      axios.get(`http://localhost:3000/articles/${id}`)
      .then(response => {
        commit('setArticle', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    createArticle ({commit}, payload) {
      console.log(payload)
      axios.post('http://localhost:3000/articles', {
        title: payload.title,
        content: payload.content,
        category: payload.category,
        author: payload.author
      })
      .then(response => {
        commit('addArticle', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteArticle ({commit}, id) {
      if (window.confirm('Deleting this? It cant be undone! ')) {
        axios.delete(`http://localhost:3000/articles/${id}`)
        .then(response => {
          console.log(response)
          commit('refreshAfterDelete', id)
        })
        .catch(err => console.log(err))
      }
    },
    updateArticle ({commit}, gabungan) {
      console.log(gabungan)
      axios.put(`http://localhost:3000/articles/${gabungan.id}`, {
        title: gabungan.record.title,
        content: gabungan.record.content,
        category: gabungan.record.category
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))
    }
  }
})

export default store
