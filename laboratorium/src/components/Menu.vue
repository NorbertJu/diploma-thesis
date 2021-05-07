<template>
  <div class="menu">
    <label for="axiom">Axiom</label>
    <input id="axiom" v-model="axiom">
    <label for="rule">Rule</label>
    <input id="rule" v-model="rule">
    <label for="angle">Angle</label>
    <input id="angle" v-model="angle">
    <label for="line">Line length</label>
    <input id="line" v-model="line">
    <label for="iterations">Iterations</label>
    <input id="iterations" v-model="iterations">
    <button v-on:click="draw()">Draw</button>
    <button v-on:click="resetTurtle()">Reset Turtle</button>
  </div>
</template>

<script>
import LSystem from '../scripts/L-system';

export default {
  name: 'Menu',
  data() {
    return {
      axiom: "",
      rule: "",
      angle: 0,
      line: 0,
      iterations: 0,
      LSystem: new LSystem()
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
    resetTurtle() {
      this.turtle.goTo(this.turtle.canvas.width()/2, this.turtle.canvas.height()/2);
    },
    draw() {
      let result = this.LSystem.computeSystem(this.axiom, {"P": "F[+P][-P]"}, this.iterations);
      this.turtle.draw(result, this.line, this.angle);
    }
  },
  computed: {
    turtle() {
      return this.$store.state.turtle;
    }
  }
}
</script>

<style scoped>
.menu {
  position: relative;
  float: left;
  width: 200px;
  height: calc(100vh - 50px);
  background-color: rgb(212, 212, 212);
}
</style>
