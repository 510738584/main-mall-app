import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    // user: {
    //   userName: '',
    //   email: '',
    //   appKey: '',
    //   role: '',
    // },
    user: getUserCookie(),
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes;
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
      setCookie(userInfo);
    },
    logout({
      commit,
    }) {
      commit('logout');
      removeUserCookie();
    },
    changeMenuRoutes({
      commit,
    }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {},
});
