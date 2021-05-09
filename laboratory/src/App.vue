<template>
  <div id="app">
    <Header/>
    <Menu/>
    <Canvas/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Canvas from './components/Canvas.vue'

export default {
  name: 'App',
  components: {
    Canvas,
    Header,
    Menu
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
}
</style>
