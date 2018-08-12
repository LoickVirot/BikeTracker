<template>
  <div id="main-menu">
    <div class="main-menu-container">
      <div class="icon">
        <h2>Tracker moto</h2>
      </div>
      <menu-item title="carte" icon="map" link='/'></menu-item>
      <menu-item title="Mes motos" icon="motorcycle" :childs="bikes" link='#'></menu-item>
      <menu-item title="Paramètres" icon="cog" :childs="parameters" link='#'></menu-item>
    </div>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapState, mapGetters } from 'vuex';
import MenuItem from './MenuItem.vue';

export default {
  name: 'mainMenu',
  components: {
    MenuItem
  },
  data() {
    return {
      parameters: [
        {name: "Mon compte"},
        {name: "Mes trackers"},
        {name: "Mes motos"}
      ]
    }
  },
  computed: {
    
  },
  beforeMount() {
    console.log(this.selectedBike)
    this.bikes.map(bike => {
      bike.url = '/bike/' + bike.id;
    })
  },
  mounted() {
    console.log(this.bikes)
    console.log(this.selectedBike)
  },
  computed: {
    ...mapState({
      bikes: state => state.bike.bikes
    }),

    ...mapGetters([
      'selectedBike'
    ]),
  }
};

</script>
<style>
  #main-menu .main-menu-container {
    background: white;
    width: 250px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    border-right: 1px solid #cccccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  #main-menu .icon {
    text-align: center;
    background: #40b883;
    padding: 30px 0;
  }

  #main-menu .icon h2 {
    font-weight: 400;
    color: #FFF;
    margin: 0;
  }
</style>
