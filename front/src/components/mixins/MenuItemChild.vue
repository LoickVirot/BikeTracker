<template>
  <div class="menu-item-child">
    {{ title }}
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */

export default {
  name: 'menuItemChild',
  props: [
    'title'
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

.menu-item-child:hover {
  background: #CCC;
}
</style>
