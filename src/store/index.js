import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

import state from './state'
import getters from './getters'
import actions from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [ createLogger() ] : []
})
