<template>
  <div class="admin-page container">
    <h1>This is Admin Page!</h1>
    <section class="new-post">
      <AppButton @click="onCreate">
        Create Post
      </AppButton>
      <AppButton @click="onLogout">
        Logout
      </AppButton>
    </section>
    <section class="my-posts">
      <h2>Edit Post:</h2>
      <PostsList is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    PostsList,
    AppButton
  },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    onCreate () {
      this.$router.push('/admin/new-post/')
    },
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
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
