import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoriesList from '../views/CategoriesList.vue'
import SubCategoriesList from '../views/SubCategoriesList'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categories-list',
    component: CategoriesList
  },
  {
    path: '/subcategories-list/:id',
    name: 'subcategories-list',
    component: SubCategoriesList,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('category/fetchCategory', routeTo.params.id)
        .then(category => {
          routeTo.params.category = category
          next()
        })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
