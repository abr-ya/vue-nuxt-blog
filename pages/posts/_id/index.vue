<template>
  <div class="wrapper">
    <div class="single-post-page">
      <section class="post">
        <h1 class="post-title">
          {{ post.title }}
        </h1>
        <div class="post-details">
          <div class="post-detail">
            created: {{ `${date} ${time}` }}
          </div>
          <div class="post-detail">
            written by: {{ post.author }}
          </div>
        </div>
        <div class="post-img">
          <img :src="post.thumb">
        </div>
        <div class="post-content">
          {{ post.content }}
        </div>
      </section>
      <!-- <section class="post-feedback">
        <p>Let me know ...</p>
        <p>ID из роутера: {{ $route.params.id }}</p>
      </section> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData (context) {
    return axios.get(`${process.env.BACK}/posts/${context.params.id}.json`)
      .then((res) => {
        const temp = new Date(res.data.date)
        const date = `${temp.getDate()}-${temp.getMonth() + 1}-${temp.getFullYear()}`
        const time = `${temp.getHours()}:${temp.getMinutes()}:${temp.getSeconds()}`
        return { post: res.data, date, time }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0;
  }

  .post-content {
    text-align: left;
  }

  .post-img {
    margin-bottom: 20px;;
  }

  .post-img img {
    width: 100%;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
