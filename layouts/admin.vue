<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'

export default {
  name: 'Admin',
  middleware: ['is-ls-user', 'need-login'],
  components: {
    TheHeader
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif !important;
}
</style>
