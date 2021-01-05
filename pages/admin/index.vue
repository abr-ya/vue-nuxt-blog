<template>
  <div class="admin-page container">
    <h1>This is Admin Page!</h1>
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post/')">
        Create Post
      </AppButton>
    </section>
    <section class="my-posts">
      <h2>Edit Post:</h2>
      <PostsList is-admin />
    </section>
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    PostsList,
    AppButton
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.my-posts {
  text-align: center;
}
</style>
