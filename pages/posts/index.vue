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
  asyncData (context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          loadedPosts: [
            { id: '1', title: 'First Post', preText: 'Prev text first post', thumb: 'https://picsum.photos/seed/003/400' },
            { id: '2', title: 'Second Post', preText: 'Prev text second post', thumb: 'https://picsum.photos/seed/002/400' },
            { id: '3', title: 'Third Post', preText: 'Prev text third post', thumb: 'https://picsum.photos/seed/001/400' }
          ]
        })
      }, 1000)
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        context.error(new Error())
      })
  }
  // для показа лоадера
  // data () {
  //   return {
  //     loadedPosts: []
  //   }
  // },
  // created () {
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       { id: '1', title: 'First Post', preText: 'Prev text first post', thumb: 'https://picsum.photos/seed/003/400' },
  //       { id: '2', title: 'Second Post', preText: 'Prev text second post', thumb: 'https://picsum.photos/seed/002/400' },
  //       { id: '3', title: 'Third Post', preText: 'Prev text third post', thumb: 'https://picsum.photos/seed/001/400' }
  //     ]
  //   }, 1500)
  // }
}
</script>

<style scoped>
/* .posts-page {
} */
</style>
