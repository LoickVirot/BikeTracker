<template>
  <div id="main-menu">
    <div class="icon">
      <h2>Tracker moto</h2>
    </div>
    <menu-item title="carte" icon="map"></menu-item>
    <menu-item title="Mes motos" icon="motorcycle" :childs="bikes"></menu-item>
    <menu-item title="Paramètres" icon="cog" :childs="parameters"></menu-item>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import MenuItem from './MenuItem.vue';

export default {
  name: 'mainMenu',
  components: {
    MenuItem,
  },
  data: () => {
    return {
      bikes: [
        {name: "Yamaha YBR 125"},
        {name: "Honda Transalp 600"},
      ],
      parameters: [
        {name: "Mon compte"},
        {name: "Mes trackers"},
        {name: "Mes motos"}
      ]
    }
  }
};

</script>
<style>
  #main-menu {
    background: white;
    width: 250px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    border-right: 1px solid #cccccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000000000;
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
