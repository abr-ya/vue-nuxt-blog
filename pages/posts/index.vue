<template>
  <div class="posts-page container">
    <h1>Posts page</h1>
    <PostsList v-if="loadedPosts.length" :posts="loadedPosts" /><!-- section -->
    <div v-else>
      Постов нет или они грузятся...
    </div>
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
