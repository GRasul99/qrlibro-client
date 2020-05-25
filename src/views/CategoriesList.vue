<template>
  <div class="home">
    <carousel>
      <slide
        v-for="category in rootCategories"
        :key="category.id"
        :category="category"
      >
        <router-link
          :to="{ name: 'subcategories-list', params: { id: category.id } }"
        >
          {{ category.id }}
          {{ category.name }}
        </router-link>
      </slide>
    </carousel>
  </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  beforeRouteEnter(routeTo, routeFrom, next) {
    store.dispatch('category/fetchCategories').then(() => {
      next()
    })
  },
  computed: {
    ...mapState(['categories', 'category']),
    rootCategories() {
      return this.category.categories.filter(category => {
        return category.parent === null
      })
    }
  }
}
</script>
