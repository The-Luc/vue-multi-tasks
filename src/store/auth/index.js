import firebase from '@/utilities/firebase';
import router from '@/router';

const state = () => ({
  user: {
    id: null,
    email: '',
  },
});

const getters = {
  isLoggedIn(state) {
    return !!state.user.id;
  },
};

const mutations = {
  saveUser(state, payload) {
    state.user.id = payload.id;
    state.user.email = payload.email;
  },
  removeUser(state) {
    state.user = { id: null, email: '' };
  },
};

const actions = {
  async signUserIn({ commit }, payload) {
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
      commit('saveUser', { id: user.uid, email: user.email });
      router.push('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log(errorCode, errorMsg);
    }
  },

  logUserOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('removeUser');
        router.push('/log-in');
      })
      .catch(error => console.log(error));
  },
};

export default { namespaced: true, state, getters, mutations, actions };
