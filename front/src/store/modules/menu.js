export default {
  state: {
    bikes: [
      {
        id: 132456,
        name: "Yamaha YBR 125",
      },
      {
        id: 1321546,
        name: "Honda Transalp 600",
      },
    ],
    selected: 1
  },
  mutations: {
    deselectAll(state) {
      state.selected = null;
    }
  }, 
  actions: {
    deselectAll({ commit }) {
      console.log('Deselect triggered')
      commit('deselectAll')
    }
  },
  getters: {
    selectedBike(state) {
      return state.bikes[state.selected] || null
    }
  }
}