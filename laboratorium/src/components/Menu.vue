<template>
  <div class="menu bg-light shadow">
    <label for="axiom" class="form-label-sm small">Axiom</label>
    <div class="input-group">
      <input type="text" class="form-control form-control-sm" id="axiom" v-model="axiom">
    </div>
    <label for="rule" class="form-label-sm small">Rules</label>
    <div class="row m-0">
      <div class="col-2 p-0">
        <input type="text" class="form-control form-control-sm" id="ruleKey" v-model="ruleKey">
      </div>
      <div class="col-1 p-0"></div>
      <div class="col-9 p-0">
        <input type="text" class="form-control form-control-sm" id="rule" v-model="rule">
      </div>
    </div>
    <label for="angle" class="form-label-sm small">Angle</label>
    <div class="input-group">
      <input type="text" class="form-control form-control-sm" id="angle" v-model="angle">
    </div>
    <label for="axiom" class="form-label-sm small">Line</label>
    <div class="input-group">
      <input type="text" class="form-control form-control-sm" id="line" v-model="line">
    </div>
    <label for="axiom" class="form-label-sm small">Iterations</label>
    <div class="input-group">
      <input type="text" class="form-control form-control-sm" id="iterations" v-model="iterations">
    </div>
    <div class="row justify-content-evenly mt-3">
      <button v-on:click="draw()" class="btn btn-outline-primary btn-sm col-3">Draw</button>
      <button v-on:click="reset()" class="btn btn-outline-secondary btn-sm col-3">Reset</button>
      <button v-on:click="clear()" class="btn btn-outline-danger btn-sm col-3">Clear</button>
    </div>    
  </div>
</template>

<script>
import LSystem from '../scripts/L-system';

export default {
  name: 'Menu',
  data() {
    return {
      axiom: "",
      ruleKey: "",
      rule: "",
      angle: 90,
      line: 20,
      iterations: 1,
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
    reset() {
      this.turtle.reset();
    },
    clear() {
      this.turtle.canvas.clear();
    },
    draw() {
      let result = this.LSystem.computeSystem(this.axiom, this.rules, this.iterations);
      this.turtle.draw(result, this.line, this.angle);
    }
  },
  computed: {
    turtle() {
      return this.$store.state.turtle;
    },
    rules() {
      return {[this.ruleKey]: this.rule};
    }
  }
}
</script>

<style scoped>
.menu {
  z-index: 0;
  position: relative;
  float: left;
  width: 280px;
  height: calc(100vh - 50px);
  padding: 10px;
}
</style>
