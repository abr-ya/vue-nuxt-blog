<template>
  <div class="home-page container">
    <section class="intro">
      <h1>Main page</h1>
    </section>
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
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/bg-main.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px 0;
  margin: 0 -10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
