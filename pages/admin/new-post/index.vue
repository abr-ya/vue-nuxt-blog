<template>
  <div class="admin-new-page container">
    <h1>Create New Post</h1>
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  }
}
</script>

<style scoped>
.admin-new-page {
  padding: 30px;
}
</style>
