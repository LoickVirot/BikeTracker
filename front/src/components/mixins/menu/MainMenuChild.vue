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
    <div class="alerts">
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
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'mainMenuChild',
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
  left: 250px;
  top: 0;
  bottom: 0;
  width: 250px;
  z-index: 10;
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
  border-radius: 5px;
  overflow: hidden;
}

.alert {
  padding: 10px;
  border-left: #CCC 5px solid;
  border-bottom: 1px solid #DDD;
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
