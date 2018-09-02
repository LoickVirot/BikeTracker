export default {
  state: {
    user: {
      username: null,
      email: null,
    },
  },
  mutations: {},
  actions: {
    login({commit, state}, username, password) {
      console.log(username);
      console.log(password);
    }
  },
  getters: {},
};
