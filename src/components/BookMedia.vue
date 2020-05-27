<template>
  <div>
    {{ book.author }} {{ book.title }}
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object
    }
  }
}
</script>

<style lang="scss"></style>
