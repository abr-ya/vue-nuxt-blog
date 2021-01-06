<template>
  <div class="wrapper">
    <div class="single-post-page">
      <section class="post">
        <h1 class="post-title">
          {{ post.title }} {{ $route.params.id }}
        </h1>
        <div class="post-details">
          <div class="post-detail">
            Last updated {{ post.date }}
          </div>
          <div class="post-detail">
            Written by {{ post.author }}
          </div>
        </div>
        <p class="post-content">
          {{ post.content }}
        </p>
      </section>
      <section class="post-feedback">
        <p>Let me know ...</p>
        <p>ID из контекста: {{ post.idTest }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: { },
  asyncData (context, callback) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        post: {
          id: '1',
          idTest: context.params.id,
          title: 'First Post',
          preText: 'Prev text first post',
          content: 'Здесь должен быть весь текст поста, большой текст большого поста, который...',
          author: 'Вася Тёркин',
          date: new Date(),
          thumb: 'https://picsum.photos/seed/003/400'
        }
      })
    }, 1000)
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
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
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
    margin: 0 10px;
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
