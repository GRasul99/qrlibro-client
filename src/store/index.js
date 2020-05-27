import Vue from 'vue'
import Vuex from 'vuex'
import * as category from './modules/category.js'
import * as book from './modules/book.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    book
  }
})
