<template>
  <div id="map-container">
    <main-menu-child v-if="selectedBike !== null" :bike="selectedBike"></main-menu-child>
    <map-box height="100vh" :markers="bikes" :marker-on-click="selectBike.bind(this)"></map-box>
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
  computed: {
    ...mapState({
      bikes: state => state.bike.bikes
    }),
    ...mapGetters([
      'selectedBike'
    ]),
  },
  methods: {
    selectBike(bike) {
      this.$store.dispatch('selectBike', bike)
    },
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
