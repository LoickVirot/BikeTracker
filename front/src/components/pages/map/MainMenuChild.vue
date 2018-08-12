<template>
  <div class="main-menu-child">
    <div class="menu-close" @click="deselect">
      <font-awesome-icon icon="arrow-left"></font-awesome-icon>
    </div>
    <h2>{{bike.name}}</h2>
    <h3>Informations</h3>
    <div class="info">
      <div class="batery">
          <h4>Batterie</h4>
          <span class="batery">
            35%
          </span>
      </div>
    </div>
    <h3>Dernières alertes</h3>
    <alert-summary></alert-summary>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapGetters, mapActions } from 'vuex';
import AlertSummary from '../alerts/AlertSummary.vue';

export default {
  name: 'mainMenuChild',
  components: {
    AlertSummary
  },
  props: [
    'bike'
  ],
  methods: {
    deselect () {
      this.$store.dispatch('deselectAll')
    }
  }
};

</script>
<style>
.main-menu-child {
  position: absolute;
  background: #FFF;
  padding: 20px;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  z-index: 1000;
}

.main-menu-child .menu-close {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 1.2em;
  color: #999;
  cursor: pointer;
}

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
