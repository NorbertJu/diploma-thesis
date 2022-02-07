import Vue from 'vue'
import Vuex from 'vuex'

import Turtle from './modules/turtle'
import System from './modules/system'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Turtle,
    System
  }
})
