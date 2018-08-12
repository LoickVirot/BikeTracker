<template>
  <div class="bike-view">
    <h1>{{ selectedBike.name }}</h1>
    <div class="table">
      <div class="column column-left">
        <card-box>
          <card-content>
            <battery-chart :percentage="battery"></battery-chart>
          </card-content>
        </card-box>
      </div>
      <div class="column column-right">
       <card-box>
          <card-content>
            <h2>Dernières alertes</h2>
          </card-content>
          <alert-summary :radius="false"></alert-summary>
        </card-box>
      </div>
    </div>
    <card-box>
      <map-box :markers="markers" height="500px"></map-box>
    </card-box>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import AlertSummary from '../alerts/AlertSummary.vue';
import MapBox from '../map/MapBox.vue';
import BatteryChart from './BatteryChart.vue';
import CardBox from './../../mixins/card/CardBox.vue';
import CardContent from './../../mixins/card/CardContent.vue';

export default {
  components: {
    MapBox,
    BatteryChart,
    CardBox,
    CardContent,
    AlertSummary,
  },
  data() {
    return {
      markers: [
        {
          position: [0, 0],
          name: 'Test',
        },
      ],
      battery: 100,
    };
  },
  computed: {
    ...mapGetters([
      'selectedBike'
    ]),
  },
  beforeMount() {
    this.loadBike(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.loadBike(to.params.id);
    next();
  },
  beforeRouteLeave(to, from, next){
    this.$store.dispatch('deselectAll');
    next();
  },
  methods: {
    loadBike(id) {
      this.$store.dispatch('selectBikeById', id);
      this.battery = this.selectedBike.battery;
      this.$set(this.markers, 0, {
        position: [this.selectedBike.position.lat, this.selectedBike.position.lng],
        name: "<b>Lat : </b>"
         + this.selectedBike.position.lat 
         + "<br><b>Long : </b>" 
         + this.selectedBike.position.lng,
      });
    }
  }
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
