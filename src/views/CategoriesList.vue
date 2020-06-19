<template>
  <div class="home">
    <Category
      v-for="category in rootCategories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
import Category from '../components/Category'

function foo(routeTo, next) {
  store.dispatch('category/fetchCategories').then(() => {
    next()
  })
}
export default {
  name: 'Home',
  components: { Category },
  beforeRouteEnter(routeTo, routeFrom, next) {
    foo(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    foo(routeTo, next)
  },
  computed: {
    ...mapState(['category']),
    rootCategories() {
      return this.category.categories.filter(category => {
        return category.parent === null
      })
    }
  }
}
</script>
