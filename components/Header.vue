<template>
  <header class="header">
    <ul class="nav">
      <li>
        <nuxt-link to="/">
          home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts/">
          posts
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts/1">
          posts 1
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts/2">
          posts 2
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about/">
          about
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
  }
  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
  }
</style>
