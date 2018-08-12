<template>
  <div :class="!radius ? 'alerts alerts-no-radius': 'alerts'">
    <alert-item 
    v-for="(alert, index) in selectedBike.alerts"
    :key="index"
    :date="alert.date" 
    :message="alert.content"
    :level="alert.level"></alert-item>
    <!-- <div class="alert alert-normal">
      <div class="alert-date">5/08/2018 - 19:14</div>
      <div class="alert-content">Niveau de batterie en dessous de 50%</div>
    </div>
    <div class="alert alert-medium">
      <div class="alert-date">5/08/2018 - 18;10</div>
      <div class="alert-content">Secousse sur la moto</div>
    </div>
    <div class="alert alert-critical">
      <div class="alert-date">3/08/2018 - 10:12</div>
      <div class="alert-content">Déplacement de la moto hors de la zone de sécurité</div>
    </div>
    <div class="alert">
      <a href="">Toutes les alertes...</a>
    </div> -->
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapGetters } from 'vuex';
import AlertItem from './AlertItem.vue';

export default {
  name: 'alertSummary',
  components: {
    AlertItem,
  },
  props: {
    radius: {
      default: true
    }
  },
  data() {
    return {
      alerts: [],
    }
  },
  beforeMount() {
    if (this.radius === undefined) {
      this.radius = false;
    }
  },
  computed: {
    ...mapGetters([
      'selectedBike'
    ]),
  }
};

</script>
<style>
.alerts {
  border: 1px solid #DDD;
  border-radius: 8px;
  overflow: hidden;
}

.alerts.alerts-no-radius {
  border-radius: 0px;
  border-right: none;
}

.alert:last-child {
  border-bottom: none;
}
</style>
