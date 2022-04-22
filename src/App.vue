<template>
<div>
  <NavbarPage />
  <div class="container">
    <HomePage />
  </div>
</div>
</template>

<script>
import HomePage from './view/HomePage.vue'
import NavbarPage from './view/NavbarPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    NavbarPage
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
