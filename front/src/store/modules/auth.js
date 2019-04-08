const axios = require('axios');
const apiConfig = require('../../../config/api-config.json');
const EventBus = require('../../services/EventBus');
const EventsEnum = require('../../enum/EventsEnum');

export default {
  state: {
    user: {
      username: null,
      email: null,
    },
    auth: {
      token: null
    }
  },
  mutations: {
    async loginUser(state, accountInfo) {
      try {
        let res = await axios.post(apiConfig.url + apiConfig.routes.login, {
          username: accountInfo.username,
          password: accountInfo.password
        });
        const apiToken = res.data.data;
        state.auth.token = apiToken;
        try {
          const id = '5ca73b2f26423500ccc2090e';
          res = await axios({
            url: apiConfig.url + apiConfig.routes.getUser + '/' + id, 
            headers: { 'Authorization': state.auth.token }
          });
          state.user.username = res.data.data.username;
          state.user.email = res.data.data.email;
          EventBus.$emit(EventsEnum.LOGIN_SUCCESS, res.data)
        } catch (err) {
          throw "User logged succesfully but was not found at search";
        }
      } catch (err) {
        console.error(err);
        EventBus.$emit(EventsEnum.LOGIN_INCORRECT, null)
      }
      // state.user.username = accountInfo.username;
    },
    logoutUser(state) {
      state.user.username = null;
      state.user.email = null;
      state.auth.token = null;
    }
  },
  actions: {
    login({commit, state}, loginParams) {
      if (loginParams.username == '') {
        EventBus.$emit(EventsEnum.LOGIN_INCORRECT_USERNAME, null);
        return;
      }
      if (loginParams.password == '') {
        EventBus.$emit(EventsEnum.LOGIN_INCORRECT_PASSWORD, null);
        return;
      }
      commit('loginUser', {
        username: loginParams.username,
        password: loginParams.password
      });
    },
    logout({commit, state}) {
      commit('logoutUser', {});
    }
  },
  getters: {},
};
