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
  components: {
    PostsList
  },
  // fetch (context) {
  //   // не грузить, если есть
  //   // но не используем - в store лучше!
  //   // if (context.store.state.loadedPosts.length) { return null }
  //     // здесь был промис - ушел в стор
  //   })
  //     .then((data) => {
  //       context.store.commit('setPosts', data.loadedPosts)
  //     })
  //     .catch((e) => {
  //       context.error(new Error())
  //     })
  // },
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
  // created () {
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  // }
}
</script>

<style scoped>
/* .posts-page {
} */
</style>
