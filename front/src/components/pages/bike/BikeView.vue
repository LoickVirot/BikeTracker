<template>
  <div class="bike-view">
    <h1>Yamaha YBR 125</h1>
    <div class="table">
      <div class="column column-left">
        <card-box>
          <card-content>
            <div class="battery">
              <div class="battery-chart">
                <canvas id="batteryChart" width="150" height="150"></canvas>
              </div>
              <div class="battery-percentage">
                <span>BATTERIE</span>
                <h1>70%</h1>
              </div>
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
  mounted() {
    let ctx = document.getElementById("batteryChart").getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Batterie restante", "Batterie finie"],
        datasets: [{
          data: [70, 100-70],
          backgroundColor: [
            '#40b883',
            '#EAEAEA'
          ],
        }],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        rotation: -0.5 * Math.PI,
        hover: {mode: null},
        maintainAspectRatio: false,
        cutoutPercentage: 70,
      }
    });
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

  .battery {
    display: flex;
  }

  .battery-chart {
    width: 150px;
  }

  .battery-percentage {
    margin: auto 20px;
  }

  .battery-percentage span {
    font-weight: bold;
    color: #CCC;
  }

  .battery-percentage h1 {
    font-weight: 100;
    font-size: 3.5em;
    margin: 0;
  }
</style>
