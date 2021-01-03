<template>
  <div>
    <div class="container">
      <Header />
      <h1>Hello, Vue!</h1>
    </div>
    <div class="container">
      <div class="links">
        <nuxt-link to="/user/">
          User
        </nuxt-link>
        <nuxt-link to="/user/1">
          User 1
        </nuxt-link>
        <nuxt-link to="/user/2">
          User 2
        </nuxt-link>
        <nuxt-link to="/user/rrr">
          User rrr
        </nuxt-link>
      </div>
      <button @click="buttonHandler">
        Products
      </button>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  methods: {
    buttonHandler () {
      // eslint-disable-next-line no-console
      console.log('go to products')
      this.$router.push('/products/')
    }
  }
}
</script>

<style>

</style>
