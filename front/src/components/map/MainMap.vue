<template>
  <div id="map-container">
    <div id="map">
      
    </div>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */

export default {
  name: 'mainMap',
  mounted: () => {
    let position = [43.604652, 1.444209];

    var mymap = L.map('map').setView(position, 18);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibHZpcm90IiwiYSI6ImNqa2d1NWE2bDBreHkza21pNDB4eHo1bzYifQ.2MuyL9eFyNCf0xnpadqkMw'
    }).addTo(mymap);

    var marker = L.marker(position).addTo(mymap);
    var circle = L.circle(position, {
        color: '#40b883',
        fillColor: '#40b883',
        fillOpacity: 0.1,
        radius: 50
    }).addTo(mymap);

    marker.bindPopup("Yamaha CBR 125").openPopup();
  },
};
</script>
<style>
  #map-container {
    position: absolute;
    left: 250px;
    right: 0;
    height: 100vh;
  }
  #map {
    width: 100%;
    height: 100vh;
  }
</style>
