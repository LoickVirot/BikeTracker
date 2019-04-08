<template>
  <div id="map-container">
    <main-menu-child v-if="selectedBike !== null" :bike="selectedBike"></main-menu-child>
    <map-box height="100vh" :markers="getBikesPositions" :marker-on-click="selectBike.bind(this)"></map-box>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapActions } from 'vuex';
import { mapState, mapGetters } from 'vuex';
import MainMenuChild from './map/MainMenuChild.vue';
import MapBox from './map/MapBox.vue';

export default {
  name: 'mapView',
  components: {
    MainMenuChild,
    MapBox
  },
  data() {
    return {
      bikesPositions: [],
    }
  },
  computed: {
    ...mapState({
      bikes: state => state.bike.bikes,
      user: state => state.auth,
    }),
    ...mapGetters([
      'selectedBike'
    ]),
    getBikesPositions() {
      let bikes = this.bikes;
      let positions = [];

      if (bikes.length > 0) {
        bikes.forEach(bike => {
          positions.push({
            position: bike.positions[0],
            name: bike.name,
            id: bike.id,
            icon: 'bike'
          });
        });
      }
      return positions;
    },
    beforeMount() {
      this.$store.dispatch('getBikes', this.user);
    }
  },
  methods: {
    selectBike(bike) {
      this.$store.dispatch('selectBike', bike)
    },
  },
  created() {
    this.$store.dispatch('getBikes', this.user);
  }
};
</script>
<style>
  #map-container {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 1
  }
  #map {
    width: 100%;
    z-index: 1;
  }
</style>
