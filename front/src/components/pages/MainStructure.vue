<template>
  <div class="mainStructure">
    <main-menu v-show="user.username !== null"></main-menu>
    <div class="main-structure">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import MainMenu from './../mixins/menu/MainMenu.vue';
import { mapState } from 'vuex';

export default {
  name: 'mainStructure',
  components: {
    MainMenu,
  },
  computed: {
    ...mapState({
      user: state => state.auth.user,
    }),
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
