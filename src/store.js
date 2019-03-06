import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
};

export default new Vuex.Store({
  state: {
    sidebarOpen: false,
  },
  getters: {
    sidebarOpen: state => state.sidebarOpen,
  },
  mutations: {
    [types.TOGGLE_SIDEBAR](state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

  },
  actions: {
    toggleSidebar({ commit, state }) {
      commit(types.TOGGLE_SIDEBAR);
    },
  },
});
