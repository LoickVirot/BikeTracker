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
      style: 'height: '+ this.height + ';'
    }
  },
  mounted () {
    this.id = 'map-' + this._uid
    let self = this;

    let position = [43.604652, 1.444209];
    let mapMarkers = [];

    console.log(this.markerOnClick);

    setTimeout(() => {
      var mymap = L.map(this.id).setView(position, 12);

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
          mapMarkers.push({
            marker: mapMarker,
            circle: circle,
          });
        });
      }
    });
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
