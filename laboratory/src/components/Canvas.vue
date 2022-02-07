<template>
  <div class="canvas-container">
    <div id="canvas" ref="canvas">
      <canvas id="turtleCanvas" ref="turtleCanvas"></canvas>
      <img class="turtle" ref="turtleImage" src="../assets/arrow.png" 
        draggable="false"
        v-bind:style="showTurtle" 
        v-on:mousedown="drag($event)">
    </div>
  </div>
</template>

<script>
import Canvas from '../scripts/canvas'
import Turtle from '../scripts/turtle'

export default {
  name: 'Canvas',
  data() {
    return {
      turtleImage: {
        width: 0,
        height: 0,
        turtleX: 0,
        turtleY: 0,
        dragX: 0,
        dragY: 0
      },
      dragging: false
    }
  },
  methods: {
    storeTurtle() {
      let canvas = new Canvas(this.$refs.turtleCanvas, window.devicePixelRatio, this.$refs.canvas);
      this.$store.commit('setTurtle', {
        turtle: new Turtle(canvas)
      })
    },
    setTurtleSize() {
      this.$refs.turtleImage.style.display = "unset";
      this.turtleImage.width = this.$refs.turtleImage.offsetWidth;
      this.turtleImage.height = this.$refs.turtleImage.offsetHeight;
    },
    setCanvasSize() {
      this.$refs.turtleCanvas.style.width = window.screen.width+"px";
      this.$refs.turtleCanvas.style.height = window.screen.height+"px";
    },
    onResize() {
      this.turtle.checkPosition(this.turtle.x, this.turtle.y);
    },
    drag(event) {
      this.dragging = true;
      this.$refs.turtleImage.style.cursor = 'grabbing';
      window.addEventListener('mousemove', this.moveTurtle)
      window.addEventListener('mouseup', this.drop)
      window.addEventListener('wheel', this.rotate)
      this.turtleImage.dragX = event.x;
      this.turtleImage.dragY = event.y;
      this.turtleImage.turtleX = this.turtle.x;
      this.turtleImage.turtleY = this.turtle.y;
    },
    moveTurtle(event) {
     if (this.dragging) {
       let newX = this.turtleImage.turtleX + (event.x - this.turtleImage.dragX);
       newX = newX > 0 ? newX : 0;
       newX = newX < this.canvas.width() ? newX : this.canvas.width();
       let newY = this.turtleImage.turtleY + (event.y - this.turtleImage.dragY);
       newY = newY > 0 ? newY : 0;
       newY = newY < this.canvas.height() ? newY : this.canvas.height();
       this.turtle.X = newX;
       this.turtle.Y = newY;
     }
    },
    drop() {
      this.dragging = false;
      this.$refs.turtleImage.style.cursor = 'grab';
      window.removeEventListener('mousemove', this.moveTurtle)
      window.removeEventListener('mouseup', this.drop)
      window.removeEventListener('wheel', this.rotate)
    },
    rotate(event) {
      if (this.dragging) {
        if (event.deltaY > 0) {
          this.turtle.rt(15)
        } else if (event.deltaY < 0) {
          this.turtle.lt(15)
        }
      }
    }
  },
  computed: {
    canvas() {
      return this.$store.state.Turtle.turtle.canvas;
    },
    turtle() {
      return this.$store.state.Turtle.turtle;
    },
    showTurtle() {
      if (this.turtle && this.turtle.visible) {
        return {
          left: this.turtle.x-(this.turtleImage.width/2)+21+"px",
          top: this.turtle.y-(this.turtleImage.height)+21+"px",
          transform: 'rotate('+(-this.turtle.heading+90)+'deg)',
          'transform-origin': '50% 100%'
        }
      }
      return {
        display: 'none'
      };
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.setCanvasSize();
    this.setTurtleSize();
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

.canvas-container {
  padding: 20px;
  position: relative;
  float: left;
  width: calc(100% - 444px);
  height: calc(100% - 50px - 1px);
}

.turtle {
  width: 12px;
  height: 14px;
  position: absolute;
  cursor: grab;
}

</style>