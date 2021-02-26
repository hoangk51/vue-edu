import Vuex from 'vuex'
import Vue from 'vue'
import state from "./state.js";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

import tool from "./store/tool";


Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    tool: tool,
  }
})



//store.commit('increment')

export default store