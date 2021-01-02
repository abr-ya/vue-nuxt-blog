<template>
  <div>
    <div class="container">
      <Logo />
      <h1>Hello, Vue!</h1>
    </div>
    <div class="container">
      <div class="links">
        <nuxt-link to="/user/">
          User
        </nuxt-link>
        <nuxt-link to="/products/1">
          Products 1
        </nuxt-link>
        <nuxt-link to="/products/2">
          Products 2
        </nuxt-link>
      </div>
      <button @click="buttonHandler">
        Products
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
