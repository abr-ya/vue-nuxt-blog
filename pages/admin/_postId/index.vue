<template>
  <div class="admin-edit-page container">
    <h1>Edit Post</h1>
    <section class="update-form">
      <AdminPostForm :post="post" @submit="onSubmitted" />
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
  asyncData (context) {
    // console.log(context.params.postId)
    return axios.get(`${process.env.BACK}/posts/${context.params.postId}.json`)
      .then((res) => {
        // console.log(res.data)
        return { post: res.data }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted (postData) {
      // console.log(process.env.BACK, postData)
      axios.put(`${process.env.BACK}/posts/${this.$route.params.postId}.json`, postData)
        // eslint-disable-next-line no-console
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
.admin-edit-page {
  padding: 30px;
}
</style>
