<template>
  <div id="map-container">
    <div id="map">
      
    </div>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import {mapActions} from 'vuex'

export default {
  name: 'mainMap',
  data() {
    return {
      bikes: this.$store.state.bike.bikes
    }
  },
  mounted () {
    let position = [43.604652, 1.444209];
    let markers = [];
    var mymap = L.map('map').setView(position, 12);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibHZpcm90IiwiYSI6ImNqa2d1NWE2bDBreHkza21pNDB4eHo1bzYifQ.2MuyL9eFyNCf0xnpadqkMw'
    }).addTo(mymap);

    let self = this;
    this.bikes.forEach(bike => {
      let position = [
        bike.position.lat,
        bike.position.lng,
      ];
      console.log(position);
      let marker = L.marker(position).addTo(mymap);
      marker.on('click', function() {
        self.selectBike(bike)
      });
      var circle = L.circle(position, {
        color: '#40b883',
        fillColor: '#40b883',
        fillOpacity: 0.1,
        radius: 50
      }).addTo(mymap);
      marker.bindPopup(bike.name);
      markers.push({
        marker: marker,
        circle: circle,
      });
    });
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
    left: 250px;
    right: 0;
    height: 100vh;
    z-index: 1
  }
  #map {
    width: 100%;
    height: 100vh;
  }
</style>
