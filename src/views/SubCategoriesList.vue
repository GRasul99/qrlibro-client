<template>
  <div>
    {{ category.id }}
    <div>
      UDC:
    </div>
    <div>
      {{ category.udc_id }}
    </div>
    <div v-for="subCat in subCategories" :key="subCat.id" :category="category">
      <router-link
        :to="{ name: 'subcategories-list', params: { id: subCat.id } }"
      >
        {{ subCat.id }}
      </router-link>
    </div>
    <button @click="logtoconsole">Console</button>
    <BookMedia />
  </div>
</template>

<script>
import store from '@/store'
import ApiService from '../services/ApiService'
import BookMedia from '@/components/BookMedia.vue'
export default {
  data() {
    return {
      categories: [],
      books: []
    }
  },
  components: {
    BookMedia
  },
  props: {
    category: {
      type: Object,
      required: true,
      dafault() {
        return {
          id: null
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('category/fetchCategories')
    store.dispatch('category/fetchCategory', to.params.id).then(category => {
      to.params.category = category
      next()
    })
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch('category/fetchCategories')
    store.dispatch('category/fetchCategory', to.params.id).then(category => {
      to.params.category = category
      next()
    })
  },
  created() {
    ApiService.getCategories().then(response => {
      this.categories = response.data
    }),
      ApiService.getBooks().then(response => {
        this.books = response.data
    })
  },
  computed: {
    subCategories() {
      return this.categories.filter(subCategory => {
        return subCategory.parent === this.category.id
      })
    },
    booksWithUDC() {
      return this.books.filter(book => {
        return this.category.udc_id.indexOf(book.id)
      })
    }
  },
  methods: {
    logtoconsole() {
      console.log(this.books)
      console.log(this.booksWithUDC)
    }
  }
}
</script>

<style scoped></style>
