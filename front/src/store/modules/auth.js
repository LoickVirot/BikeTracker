export default {
  state: {
    user: {
      username: null,
      email: null,
    },
  },
  mutations: {
    loginUser(state, accountInfo) {
      state.user.username = accountInfo.username;
    },
    logoutUser(state) {
      state.user.username = null;
    }
  },
  actions: {
    login({commit, state}, loginParams) {
      if (loginParams.username == '') {
        return "Username can't be empty";
      }
      if (loginParams.password == '') {
        return "Password can't be empty";
      }
      commit('loginUser', {
        username: loginParams.username,
      });
    },
    logout({commit, state}) {
      commit('logoutUser', {});
    }
  },
  getters: {},
};
