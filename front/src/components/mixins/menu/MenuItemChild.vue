<template>
  <router-link :to="url">
    <div class="menu-item-child" :class="{selected: selected}">
      {{ title }}
    </div>
  </router-link>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */

export default {
  name: 'menuItemChild',
  props: [
    'title',
    'selected',
    'url'
  ],
};

</script>
<style>
.menu-item-child {
  background: #EAEAEA;
  padding: 20px;
  padding-left: 35px;
  text-transform: initial;
  font-weight: 400;
}
.menu-item-child.selected {
  background: #FFF;
}

.menu-item-child:hover {
  background: #CCC;
}
</style>
