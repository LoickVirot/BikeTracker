<template>
  <div class="mainStructure">
    <main-menu></main-menu>
    <router-view></router-view>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import MainMenu from './../mixins/menu/MainMenu.vue';

export default {
  name: 'mainStructure',
  components: {
    MainMenu,
  },
};

</script>
<style>

</style>
