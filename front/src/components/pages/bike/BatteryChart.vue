<template>
  <div class="battery">
    <div class="battery-chart">
      <canvas id="batteryChart" width="150" height="150"></canvas>
    </div>
    <div class="battery-percentage">
      <span>BATTERIE</span>
      <h1>{{this.percentage}}%</h1>
    </div>
  </div>
</template>
<script>

export default {
  props: [
    'percentage'
  ],
  data() {
    return {
      myChart: null,
    }
  },
  mounted() {
    let ctx = document.getElementById("batteryChart").getContext('2d');
    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.percentage, 100-this.percentage],
          backgroundColor: [
            this.percentage > 50 ? '#40b883' : this.percentage > 20 ? '#ffd14d' : '#ff5151',
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
  updated() {
    this.myChart.data.datasets[0].data = [this.percentage, 100-this.percentage];
    this.myChart.data.datasets[0].backgroundColor[0] = this.percentage > 50 ? '#40b883' : this.percentage > 20 ? '#ffd14d' : '#ff5151'
    this.myChart.update();
  }
};
</script>
<style>
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
