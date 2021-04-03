import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    canvas: undefined,
    turtle: undefined
  }),
  mutations: {
    setCanvas (state, payload) {
      state.canvas = payload.canvas;
    },
    setTurtle (state, payload) {
      state.turtle = payload.turtle;
    }
  }
})
