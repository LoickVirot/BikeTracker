export default {
  state: {
    user: {
      username: null,
      email: null,
    },
  },
  mutations: {
    loginUser(state, accountInfo) {
      state.username = accountInfo.username;
      console.log('Succesfully logged in');
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
    }
  },
  getters: {},
};
