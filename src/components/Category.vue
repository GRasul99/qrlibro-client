<template>
  <div>
    <router-link
      :to="{ name: 'subcategories-list', params: { id: category.id } }"
    >
      {{ category.id }}
      {{ category.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
