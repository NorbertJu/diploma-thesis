<template>
  <div class="menu">
    <input v-model="distance">
    <button v-on:click="fd()">FD</button>
    <input v-model="angle">
    <button v-on:click="lt()">LT</button>
    <button v-on:click="rt()">RT</button>
    <input v-model="xcor">
    <input v-model="ycor">
    <button v-on:click="goTo()">Go to</button>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      distance: 100,
      angle: 90,
      xcor: 0,
      ycor: 0
    }
  },
  methods: {
    fd() {
      this.turtle.fd(this.distance);
    },
    lt() {
      this.turtle.lt(this.angle);
    },
    rt() {
      this.turtle.rt(this.angle);
    },
    goTo() {
      this.turtle.goTo(this.xcor, this.ycor);
    }
  },
  computed: {
    turtle() {
      return this.$store.state.turtle;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  position: relative;
  float: left;
  width: 200px;
  height: calc(100vh - 50px);
  background-color: rgb(212, 212, 212);
}
</style>
