import axios from 'axios';
import apiConfig from '../../../config/api-config.json'

export default {
  state: {
    bikes: [],
    selected: null
  },
  mutations: {
    deselectAll(state) {
      state.selected = null;
    },
    selectBike(state, index) {
      state.selected = index;
    },
    async getBikes(state, userToken) {
      try {
        const res = await axios({
          url: apiConfig.url + apiConfig.routes.getTrackers,
          headers: { 'Authorization': userToken }
        });
        const bikes = res.data.data;
        state.bikes = [];
        bikes.forEach(bike => {
          const bikeObj = {
            id: bike._id,
            name: bike.label,
            positions: [
              {
                date: new Date('2018-06-22T03:24:00'),
                lat: 43.64709329999999,
                lng: 1.4254163000000517
              },
              {
                date: new Date('2018-06-22T03:24:00'),
                lat: 43.562512,
                lng: 1.458816
              },
              {
                date: new Date('2018-06-22T03:24:00'),
                lat: 43.606136,
                lng: 1.448605
              },
            ],
            battery: 35,
            alerts: [
              {
                date: new Date('2018-06-22T03:24:00'),
                content: 'Test',
                level: 2
              },
              {
                date: new Date('2018-06-22T03:24:00'),
                content: 'Test alerte 2',
                level: 0
              },
              {
                date: new Date('2018-06-22T03:24:00'),
                content: 'Heeeeyyy',
                level: 1
              },
            ]
          };
          state.bikes.push(bikeObj);
        })
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
  }, 
  actions: {
    deselectAll({ commit }) {
      commit('deselectAll')
    },
    selectBike({commit, state}, bike) {
      let selectedBikeObject = state.bikes.find(o => o.id === bike.id);
      commit('selectBike', state.bikes.indexOf(selectedBikeObject))
    },
    selectBikeById({commit, state}, bikeId) {
      let bike = state.bikes.filter(bike => {
        return bike.id == bikeId
      })[0];
      commit('selectBike', state.bikes.indexOf(bike));
    },
    getBikes({commit, state}, user) {
      commit('getBikes', user.auth.token)
    }
  },
  getters: {
    selectedBike(state) {
      return state.bikes[state.selected] || null
    }
  }
}