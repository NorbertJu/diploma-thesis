<template>
  <div>
    <div class="left-half">
      <label for="faultyStep" class="form-label-sm small">Faulty step: <span class="smal text-primary">{{faultyStep}}%</span></label>
      <div class="slider"> 
        <div class="min small">0</div>
        <input type="range" class="form-range" min="0" max="50" step="1" id="faultyStep" v-model="faultyStep">
        <div class="max small">50</div>
      </div>
    </div>
    <div class="right-half">
      <label for="probabilityFaultyStep" class="form-label-sm small">Probability: <span class="smal text-primary">{{probabilityFaultyStep}}%</span></label>
      <div class="slider"> 
        <div class="min small">1</div>
        <input type="range" class="form-range" min="1" max="100" step="1" id="probabilityFaultyStep" v-model="probabilityFaultyStep">
        <div class="max small">100</div>
      </div>
    </div>
    <div class="left-half pt-3">
      <label for="faultyTurn" class="form-label-sm small">Faulty turn: <span class="smal text-primary">{{faultyTurn}}</span></label>
      <div class="slider"> 
        <div class="min small">0</div>
        <input type="range" class="form-range" min="0" max="50" step="1" id="faultyTurn" v-model="faultyTurn">
        <div class="max small">50</div>
      </div>
    </div>
    <div class="right-half pt-3">
      <label for="probabilityFaultyTurn" class="form-label-sm small">Probability: <span class="smal text-primary">{{probabilityFaultyTurn}}%</span></label>
      <div class="slider"> 
        <div class="min small">1</div>
        <input type="range" class="form-range" min="1" max="100" step="1" id="probabilityFaultyTurn" v-model="probabilityFaultyTurn">
        <div class="max small">100</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Randomness',
  computed: {
    faultyTurn: {
      get () {
        return this.$store.state.System.faultyTurn
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'faultyTurn',
          value: value
        })
      }
    },
    probabilityFaultyTurn: {
      get () {
        return this.$store.state.System.probabilityFaultyTurn
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'probabilityFaultyTurn',
          value: value
        })
      }
    },
    faultyStep: {
      get () {
        return this.$store.state.System.faultyStep
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'faultyStep',
          value: value
        })
      }
    },
    probabilityFaultyStep: {
      get () {
        return this.$store.state.System.probabilityFaultyStep
      },
      set (value) {
        this.$store.commit('changeSystem', {
          name: 'probabilityFaultyStep',
          value: value
        })
      }
    }
  }
}
</script>

<style>


</style>