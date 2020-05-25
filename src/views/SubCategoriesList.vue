<template>
  <div>
    <button @click="logtoConsole">
      console
    </button>
    {{ category.id }}
    <div v-for="subCat in subCategories" :key="subCat.id">
      <router-link :to="subCat.id">
        {{ subCat.id }}
      </router-link>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import ApiService from '../services/ApiService'
export default {
  name: 'SubCategoriesList',
  data() {
    return {
      categories: []
    }
  },
  computed: {
    subCategories() {
      return this.categories.filter(subCategory => {
        return subCategory.parent === this.category.id
      })
    }
  },
  props: {
    category: {
      type: Object
    }
  },
  created() {
    ApiService.getCategories().then(response => {
      this.categories = response.data
    })
  },
  methods: {
    logtoConsole() {
      console.log(this.categories)
    }
  }
}
</script>

<style scoped></style>
