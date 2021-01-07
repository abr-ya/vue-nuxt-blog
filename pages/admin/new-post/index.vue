<template>
  <div class="admin-new-page container">
    <h1>Create New Post</h1>
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted (postData) {
      // console.log(process.env.BACK, postData)
      axios.post(`${process.env.BACK}/posts.json`,
        { ...postData, date: new Date() })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res) // убедимся, что всё хорошо
          this.$router.push('/admin') // венемся в админку
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.admin-new-page {
  padding: 30px;
}
</style>
