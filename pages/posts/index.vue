<template>
  <div class="posts-page container">
    <h1>Posts page</h1>
    <PostsList /><!-- section -->
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'

export default {
  components: {
    PostsList
  }
}
</script>

<style scoped>
/* .posts-page {
} */
</style>
