<template>
  <div class="bike-view">
    <h1>Yamaha YBR 125</h1>
    <div class="table">
      <div class="column column-left">
        <card-box>
          <card-content>
            <h2>Statistiques</h2>
            <div class="battery">
              
            </div>
          </card-content>
        </card-box>
      </div>
      <div class="column column-right">
       <card-box>
          <card-content>
            <h2>Alertes</h2>
          </card-content>
        </card-box>
      </div>
    </div>
    <card-box>
      <map-box :markers="markers" height="500px"></map-box>
    </card-box>
  </div>
</template>
<script>
import MapBox from '../map/MapBox.vue';
import CardBox from './../../mixins/card/CardBox.vue';
import CardContent from './../../mixins/card/CardContent.vue';

export default {
  components: {
    MapBox,
    CardBox,
    CardContent
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
    margin-bottom: 10px;
  }

  .column {
    margin: 10px;
    flex: 1;
  }
</style>
