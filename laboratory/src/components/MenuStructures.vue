<template>
  <div class="structures">
    <div class="structure">
      <div class="form-check d-inline-block">
        <input class="form-check-input" type="checkbox" id="leaf" v-model="leaf">
        <label class="form-check-label" for="leaf">
          Leaf
        </label>
        <input type="color" id="leafColor" class="color" v-model="leafColor">
      </div>
      <div>
        <div class="left-half">
          <label for="leafSize" class="form-label-sm small">Leaf Size: <span class="smal text-primary">{{getSize(leafSize)}}</span></label>
          <div class="slider"> 
            <div class="min small">auto</div>
            <input type="range" class="form-range w-65" min="0" max="3" step="1" id="leafSize" v-model="leafSize">
            <div class="max small">big</div>
          </div>
        </div>
        <div class="right-half">
          <label for="leafProbability" class="form-label-sm small">Probability: <span class="smal text-primary">{{leafProbability}}%</span></label>
          <div class="slider"> 
            <div class="min small">1</div>
            <input type="range" class="form-range" min="1" max="100" step="1" id="leafProbability" v-model="leafProbability">
            <div class="max small">100</div>
          </div>
        </div>        
      </div>
    </div>
    <div class="structure">
      <div class="form-check d-inline-block">
        <input class="form-check-input" type="checkbox" id="fruit" v-model="fruit">
        <label class="form-check-label" for="fruit">
          Fruit
        </label>
        <input type="color" id="fruitColor" class="color" v-model="fruitColor">
      </div>
      <div>
        <div class="left-half">
          <label for="fruitSize" class="form-label-sm small">Fruit Size: <span class="smal text-primary">{{getSize(fruitSize)}}</span></label>
          <div class="slider"> 
            <div class="min small">auto</div>
            <input type="range" class="form-range w-65" min="0" max="3" step="1" id="fruitSize" v-model="fruitSize">
            <div class="max small">big</div>
          </div>
        </div>
        <div class="right-half">
          <label for="fruitProbability" class="form-label-sm small">Probability: <span class="smal text-primary">{{fruitProbability}}%</span></label>
          <div class="slider"> 
            <div class="min small">1</div>
            <input type="range" class="form-range" min="1" max="100" step="1" id="fruitProbability" v-model="fruitProbability">
            <div class="max small">100</div>
          </div>
        </div>        
      </div>
    </div>
    <div class="structure">
      <div class="form-check d-inline-block">
        <input class="form-check-input" type="checkbox" id="flower" v-model="flower">
        <label class="form-check-label" for="flower">
          Flower
        </label>
        <input type="color" id="flowerColor" class="color" v-model="flowerColor">
      </div>
      <div>
        <div class="left-half">
          <label for="flowerSize" class="form-label-sm small">Flower Size: <span class="smal text-primary">{{getSize(flowerSize)}}</span></label>
          <div class="slider"> 
            <div class="min small">auto</div>
            <input type="range" class="form-range w-65" min="0" max="3" step="1" id="flowerSize" v-model="flowerSize">
            <div class="max small">big</div>
          </div>
        </div>
        <div class="right-half">
          <label for="flowerProbability" class="form-label-sm small">Probability: <span class="smal text-primary">{{flowerProbability}}%</span></label>
          <div class="slider"> 
            <div class="min small">1</div>
            <input type="range" class="form-range" min="1" max="100" step="1" id="flowerProbability" v-model="flowerProbability">
            <div class="max small">100</div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Structures',
  methods: {
    getSize(size) {
      switch(size) {
        case "0": return "auto"
        case "1": return "small"
        case "2": return "medium"
        case "3": return "big"
      }
    },
  },
  computed: {
    leaf: {
      get () {
        return this.$store.state.System.leaf
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'leaf',
          value: value
        })
      }
    },
    leafSize: {
      get () {
        return this.$store.state.System.leafSize
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'leafSize',
          value: value
        })
      }
    },
    leafProbability: {
      get () {
        return this.$store.state.System.leafProbability
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'leafProbability',
          value: value
        })
      }
    },
    leafColor: {
      get () {
        return this.$store.state.System.leafColor
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'leafColor',
          value: value
        })
      }
    },
    fruit: {
      get () {
        return this.$store.state.System.fruit
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'fruit',
          value: value
        })
      }
    },
    fruitSize: {
      get () {
        return this.$store.state.System.fruitSize
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'fruitSize',
          value: value
        })
      }
    },
    fruitProbability: {
      get () {
        return this.$store.state.System.fruitProbability
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'fruitProbability',
          value: value
        })
      }
    },
    fruitColor: {
      get () {
        return this.$store.state.System.fruitColor
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'fruitColor',
          value: value
        })
      }
    },
    flower: {
      get () {
        return this.$store.state.System.flower
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'flower',
          value: value
        })
      }
    },
    flowerSize: {
      get () {
        return this.$store.state.System.flowerSize
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'flowerSize',
          value: value
        })
      }
    },
    flowerProbability: {
      get () {
        return this.$store.state.System.flowerProbability
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'flowerProbability',
          value: value
        })
      }
    },
    flowerColor: {
      get () {
        return this.$store.state.System.flowerColor
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'flowerColor',
          value: value
        })
      }
    }
  }
}
</script>

<style>
.structures {
  text-align: center;
}

.structure {
  height: 120px;;
}
</style>