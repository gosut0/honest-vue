import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navIndex: 0,
  },
  getters: {
    getNavIndex: state => {
      return state.navIndex;
    }
  },
  // 官方推荐的修改
  mutations: {
    setNavIndex(state, i) {
      state.navIndex = i;
    }
  }
})

export default store