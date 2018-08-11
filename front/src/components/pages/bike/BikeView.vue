<template>
  <div class="bike-view">
    <h1>Yamaha YBR 125</h1>
    <div class="table">
      <div class="column column-left">
        <div class="card">
          <div class="card-content">
            <h2>Statistiques</h2>
          </div>
        </div>
      </div>
      <div class="column column-right">
        <div class="card">
          <div class="card-content">
            <h2>Alertes</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="card map">
      <map-box :markers="markers" height="500px"></map-box>
    </div>
  </div>
</template>
<script>
import MapBox from '../map/MapBox.vue';

export default {
  components: {
    MapBox,
  },
  data() {
    return {
      markers: [
        {
          position: [43.604652, 1.444209],
          name: 'Test',
        },
      ],
    };
  },
};
</script>
<style>
  .bike-view {
    padding: 40px;
  }

  .table {
    display: flex;
    margin: 0 -10px;
  }

  .column {
    margin: 10px;
    flex: 1;
  }

  .card {
    background: #FFF;
    border-radius: 5px;
    border: 1px solid #CCC;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .card h2 {
    margin: 0;
  }

  .card .card-content {
    padding: 10px;
  }

</style>
