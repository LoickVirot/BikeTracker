<template>
  <div class="mainStructure">
    <main-menu></main-menu>
    <main-map></main-map>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import MainMenu from './../mixins/MainMenu.vue';
import MainMap from './../map/MainMap.vue';

export default {
  name: 'mainStructure',
  components: {
    MainMenu,
    MainMap,
  },
};

</script>
<style>

</style>
