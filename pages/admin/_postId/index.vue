<template>
  <div class="admin-edit-page container">
    <h1>Edit Post</h1>
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Vasya Pupkin',
        title: 'Загруженный пост',
        thumb: 'https://picsum.photos/seed/004/400', // короче
        content: 'А здесь текст поста для редактирования'
      }
    }
  }
}
</script>

<style scoped>
.admin-edit-page {
  padding: 30px;
}
</style>
