<template>
  <div class="posts-page container">
    <h1>Posts page</h1>
    <PostsList :posts="loadedPosts" /><!-- section -->
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'

export default {
  // middleware: 'log',
  components: {
    PostsList
  },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.posts-page {
  padding: 30px 0;
}
</style>
