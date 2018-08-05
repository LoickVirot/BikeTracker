<template>
  <div id="app">
    <MainStucture msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainStucture from './components/pages/MainStructure.vue';

export default {
  name: 'app',
  components: {
    MainStucture,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: #EAEAEA;
  color: #333;
}
</style>
