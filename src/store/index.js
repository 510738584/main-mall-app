import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: {
      userName: '',
      email: '',
      appKey: '',
      role: '',
    },
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
  },
  actions: {
    changeCollapsed({
      commit,
    }) {
      commit('changeCollapsed');
    },
    setUserInfo({
      commit,
    }, userInfo) {
      commit('setUserInfo', userInfo);
    },
  },
  modules: {},
});
