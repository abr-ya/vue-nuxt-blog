<template>
  <div class="admin-new-page container">
    <h1>Create New Post</h1>
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted (postData) {
      // console.log(process.env.BACK, postData)
      // запрос переехал в store
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin') // вернемся в админку
      })
    }
  }
}
</script>

<style scoped>
.admin-new-page {
  padding: 30px;
}
</style>
