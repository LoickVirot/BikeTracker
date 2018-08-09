<template>
  <div class="mainStructure">
    <main-menu></main-menu>
    <div class="main-structure">
      <router-view></router-view>
    </div>
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
.main-structure {
  position: absolute;
  left: 250px;
  right: 0;
}
</style>
