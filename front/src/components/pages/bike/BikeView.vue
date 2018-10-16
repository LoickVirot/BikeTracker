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
          <alert-summary :radius="false" limit="3"></alert-summary>
          <card-content>
            <link-item :to="'/bike/' + selectedBike.id + '/alerts'">
              <font-awesome-icon icon="arrow-right"></font-awesome-icon>&nbsp;Toutes les alertes
            </link-item>
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
import { mapGetters } from 'vuex';
import AlertSummary from '../alerts/AlertSummary.vue';
import MapBox from '../map/MapBox.vue';
import BatteryChart from './BatteryChart.vue';
import CardBox from './../../mixins/card/CardBox.vue';
import CardContent from './../../mixins/card/CardContent.vue';
import LinkItem from './../../mixins/LinkItem.vue';

export default {
  components: {
    MapBox,
    BatteryChart,
    CardBox,
    CardContent,
    AlertSummary,
    LinkItem
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
      this.selectedBike.positions.forEach((position, index) => {
        let dateDate = new Date(position.date);
        let dateStr = dateDate.toLocaleTimeString('fr-FR', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',        
        });

        this.$set(this.markers, index, {
          position: [position.lat, position.lng],
          name: 
          '<b>Date : </b>' + dateStr
          + "<br><b>Lat : </b>"
          + position.lat 
          + "<br><b>Long : </b>" 
          + position.lng,
        });
      });

      this.markers[0].icon = 'bike'
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
