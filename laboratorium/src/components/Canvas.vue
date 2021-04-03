<template>
  <div class="canvas-container">
    <div id="canvas" ref="canvas">
      <canvas id="turtleCanvas" ref="turtleCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import Canvas from '../scripts/canvas'
import Turtle from '../scripts/turtle'

export default {
  name: 'Canvas',
  methods: {
    storeCanvas() {
      this.$store.commit('setCanvas', {
        canvas: new Canvas(this.$refs.turtleCanvas, window.devicePixelRatio)
      })
    },
    storeTurtle() {
      this.$store.commit('setTurtle', {
        turtle: new Turtle(this.canvas)
      })
    },
    setCanvasSize() {
      this.$refs.turtleCanvas.style.width = window.screen.width+"px";
      this.$refs.turtleCanvas.style.height = window.screen.height+"px";
    }
  },
  computed: {
    canvas() {
      return this.$store.state.canvas;
    }
  },
  mounted() {
    this.setCanvasSize();
    this.storeCanvas();
    this.storeTurtle();
  },
}
</script>

<style scoped>
#canvas {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-shadow: 7px 7px 3px #e2e2e2;
  overflow: hidden;
}

#imageCanvas {
  display: none;
}

.canvas-container {
  padding: 20px;
  position: relative;
  float: left;
  width: calc(100% - 200px - 40px);
  height: calc(100% - 50px - 40px);
}
</style>
