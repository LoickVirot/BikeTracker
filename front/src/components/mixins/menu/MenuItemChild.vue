<template>
  <div class="menu-item-child" :class="{selected: selected}">
    {{ title }}
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */

export default {
  name: 'menuItemChild',
  props: [
    'title',
    'selected'
  ]
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
  background: red;
}

.menu-item-child:hover {
  background: #CCC;
}
</style>
