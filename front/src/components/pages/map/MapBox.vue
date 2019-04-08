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

    if (this.markers.length > 0) {
      let position = this.markers[0].position;
    } else {
      let position = [];
    }

    setTimeout(() => {
      const defaultPosition = [
        '48.853',
        '2.35'
      ];

      if (this.markers.length > 0) { 
        var mymap = L.map(this.id).fitBounds(this.markers.map(marker => {
          return marker.position 
        })); 
      } else { 
        var mymap = L.map(this.id).setView(defaultPosition, 6);
      }
      mymap.setZoom(mymap.getZoom() - 1);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibHZpcm90IiwiYSI6ImNqa2d1NWE2bDBreHkza21pNDB4eHo1bzYifQ.2MuyL9eFyNCf0xnpadqkMw'
      }).addTo(mymap);

      this.map = mymap;

      if (this.markers !== undefined && this.markers.length > 0) {
        this.showMarkers();
      }
    });
  },
  watch: {
    markers: async function(newVal, oldVal) {
      await this.mapMarkers.map((marker, index) => {
        this.map.removeLayer(marker.marker)
        this.map.removeLayer(marker.circle)
      });
      this.mapMarkers = [];
      this.showMarkers();
      this.map.setZoomAround(this.mapMarkers[0].marker.getLatLng(), 20);
      this.map.panTo(this.mapMarkers[0].marker.getLatLng())
    },
  },
  methods: {
    showMarkers() {
      this.markers.forEach(marker => {
        let icon = null;
        if (marker.icon == 'bike') {
          icon = L.icon({
            iconUrl: '/image/motorcycle.png',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -16]
          });
        } else {
          icon = L.icon({
            iconUrl: '/image/pin-red.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          });
        }
        let position = marker.position
        let mapMarker = L.marker(position, {
          icon: icon
        }).addTo(this.map);
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
        }).addTo(this.map);
        mapMarker.bindPopup(marker.name);
        this.mapMarkers.push({
          marker: mapMarker,
          circle: circle,
        });
      });
    }
  },
  watch: {
    mapMarkers: function() {
      const self = this;
      console.log(self.mapMarkers)
      this.map.fitBounds(this.mapMarkers.map(marker => {
        return marker.marker.getLatLng(); 
      }));
    }
  }
};
</script>
<style>
  .map {
    width: 100%;
    z-index: 1;
    min-height: 200px;
  }
</style>
