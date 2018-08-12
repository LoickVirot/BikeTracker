<template>
  <div :class="!radius ? 'alerts alerts-no-radius': 'alerts'">
    <div class="alert alert-normal">
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
    </div>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'alertSummary',
  props: {
    radius: {
      default: true
    }
  },
  beforeMount() {
    if (this.radius === undefined) {
      this.radius = false;
    }
  }
};

</script>
<style>
.alerts {
  border: 1px solid #DDD;
  border-radius: 8px;
  overflow: hidden;
}

.alert {
  padding: 10px;
  border-left: #FFF 5px solid;
  border-bottom: 1px solid #DDD;
}

.alerts.alerts-no-radius {
  border-radius: 0px;
  border-right: none;
}

.alert:last-child {
  border-bottom: none;
}

.alert .alert-date {
  font-size: 0.7em;
  color: #999;
}

.alert.alert-normal {
  border-left: #40b883 5px solid;
}

.alert.alert-medium {
  border-left: #ffd14d 5px solid;
}

.alert.alert-critical {
  border-left: #ff5151 5px solid;
}

.alert a {
  color: inherit;
  text-decoration: none;
  font-size: 0.9em;
}
</style>
