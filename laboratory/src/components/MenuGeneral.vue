<template>
  <div>
    <label for="order" class="form-label-sm small center">Order: <span class="smal text-primary">{{order}}</span></label>
    <div class="slider"> 
      <div class="min small">0</div>
      <input type="range" class="form-range" min="0" max="20" step="1" id="order" v-model="order">
      <div class="max small">&nbsp;20</div>
    </div>
    <label for="length" class="form-label-sm small center">Length: <span class="smal text-primary">{{length}}</span></label>
    <div class="slider"> 
      <div class="min small">0</div>
      <input type="range" class="form-range" min="0" max="300" step="1" id="length" v-model="length">
      <div class="max small">300</div>
    </div>
    <label for="angle" class="form-label-sm small center">Angle: <span class="smal text-primary">{{angle}}</span></label>
    <div class="slider"> 
      <div class="min small">0</div>
      <input type="range" class="form-range" min="0" max="180" step="1" id="angle" v-model="angle">
      <div class="max small">180</div>
    </div>
    <div class="left-half">
      <label for="penSize" class="form-label-sm small">Pen size: <span class="smal text-primary">{{penSize}}</span></label>
      <div class="slider"> 
        <div class="min small">1</div>
        <input type="range" class="form-range" min="1" max="15" step="1" id="penSize" v-model="penSize">
        <div class="max small">15</div>
      </div>
    </div>
    <div class="right-half">
      <label for="penSizeDecrease" class="form-label-sm small">Pen size decrease: <span class="smal text-primary">{{penSizeDecrease}}</span></label>
      <div class="slider"> 
        <div class="min small">0</div>
        <input type="range" class="form-range" min="0" max="5" step="1" id="penSizeDecrease" v-model="penSizeDecrease">
        <div class="max small align">5</div>
      </div>
    </div>
    <div class="left-half pt-2">
      <label for="penColor" class="form-label-sm small">Pen color: </label>
      <input type="color" id="penColor" class="color" v-model="penColor">
    </div>
    <div class="right-half pt-2">
      <label for="backgroundColor" class="form-label-sm small">Background color: </label>
      <input type="color" id="backgroundColor" class="color" v-model="newBGColor" @blur="changeBackgroundColor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'General',
  methods: {
    changeBackgroundColor() {
      if (this.newBGColor !== this.backgroundColor) {
        this.canvas.color(this.newBGColor)
        this.backgroundColor = this.newBGColor
      }
    },
  },
  computed: {
    canvas() {
      return this.$store.state.Turtle.turtle.canvas;
    },
    length: {
      get () {
        return this.$store.state.System.length
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'length',
          value: value
        })
      }
    },
    order: {
      get () {
        return this.$store.state.System.order
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'order',
          value: value
        })
      }
    },
    angle: {
      get () {
        return this.$store.state.System.angle
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'angle',
          value: value
        })
      }
    },
    penSize: {
      get () {
        return this.$store.state.System.penSize
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'penSize',
          value: value
        })
      }
    },
    penSizeDecrease: {
      get () {
        return this.$store.state.System.penSizeDecrease
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'penSizeDecrease',
          value: value
        })
      }
    },
    backgroundColor: {
      get () {
        return this.$store.state.System.backgroundColor
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'backgroundColor',
          value: value
        })
      }
    },
    newBGColor: {
      get () {
        return this.$store.state.System.newBGColor
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'newBGColor',
          value: value
        })
      }
    },
    penColor: {
      get () {
        return this.$store.state.System.penColor
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'penColor',
          value: value
        })
      }
    }
  }
}
</script>

<style>
.align {
  padding-left: 15px;
  padding-right: 5px;
}
</style>