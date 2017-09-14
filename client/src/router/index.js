import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Article from '@/components/Article'
import Category from '@/components/Category'
import Author from '@/components/Author'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/category/:category',
      component: Category,
      props: true
    },
    {
      path: '/author/:author',
      component: Author,
      props: true
    }
  ]
})
