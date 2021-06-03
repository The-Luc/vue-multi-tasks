import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'hello',
  },
  getters: {
    getMsg(state) {
      return state.msg;
    },
  },
});
