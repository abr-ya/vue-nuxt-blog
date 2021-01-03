<template>
  <div class="wrapper">
    <Header />
    <div class="posts-page">
      <h1>Posts page</h1>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
