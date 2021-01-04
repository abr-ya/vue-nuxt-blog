<template>
  <div class="home-page container">
    <section class="intro">
      <h1>Get the latest posts</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        thumb="https://picsum.photos/seed/001/400"
        title="Post Title 1"
        pre-text="Prev text 001"
      />
      <PostPreview
        id="2"
        thumb="https://picsum.photos/seed/002/400"
        title="Post Title 2"
        pre-text="Prev text 002"
      />
      <PostPreview
        id="3"
        thumb="https://picsum.photos/seed/003/400"
        title="Post Title 3"
        pre-text="Prev text 003"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'

export default {
  components: {
    PostPreview
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
