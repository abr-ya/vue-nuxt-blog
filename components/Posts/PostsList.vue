<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumb="https://picsum.photos/seed/001/400"
      title="Post Title 1"
      pre-text="Prev text 001"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumb="https://picsum.photos/seed/002/400"
      title="Post Title 2"
      pre-text="Prev text 002"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumb="https://picsum.photos/seed/003/400"
      title="Post Title 3"
      pre-text="Prev text 003"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px 0;
  margin: 0 -10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
