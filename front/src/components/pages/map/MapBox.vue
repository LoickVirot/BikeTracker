<template>
  <div :id="id" class="map" :style='style'></div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
export default {
  name: 'mapBox',
  props: [
    'markers',
    'height',
    'markerOnClick'
  ],
  data () {
    return {
      id: null,
      style: 'height: '+ this.height + ';',
      map: null,
      mapMarkers: [],
    }
  },
  mounted () {
    this.id = 'map-' + this._uid
    let self = this;

    let position = this.markers[0].position || [43.604652, 1.444209];

    setTimeout(() => {
      // var mymap = L.map(this.id).setView(position, 20);
      var mymap = L.map(this.id).fitBounds(this.markers.map(marker => {
        return marker.position 
      }));
      mymap.setZoom(mymap.getZoom() - 1);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibHZpcm90IiwiYSI6ImNqa2d1NWE2bDBreHkza21pNDB4eHo1bzYifQ.2MuyL9eFyNCf0xnpadqkMw'
      }).addTo(mymap);

      if (this.markers !== undefined) {
        this.markers.forEach(marker => {
          let position = marker.position
          let mapMarker = L.marker(position).addTo(mymap);
          if (self.markerOnClick !== undefined) {
            mapMarker.on('click', function() {
              self.markerOnClick(marker);
            });
          }
          var circle = L.circle(position, {
            color: '#40b883',
            fillColor: '#40b883',
            fillOpacity: 0.1,
            radius: 50
          }).addTo(mymap);
          mapMarker.bindPopup(marker.name);
          this.mapMarkers.push({
            marker: mapMarker,
            circle: circle,
          });
        });
      }
      this.map = mymap;
    });
  },
  watch: {
    markers: async function(newVal, oldVal) {
      await newVal.map((marker, index) => {
        this.mapMarkers[index].marker.setLatLng(marker.position);
        this.mapMarkers[index].marker.bindPopup(marker.name);
        this.mapMarkers[index].circle.setLatLng(marker.position);
      });
      this.map.setZoomAround(this.mapMarkers[0].marker.getLatLng(), 20);
      this.map.panTo(this.mapMarkers[0].marker.getLatLng())
    },
  },
};
</script>
<style>
  .map {
    width: 100%;
    z-index: 1;
    min-height: 200px;
  }
</style>
