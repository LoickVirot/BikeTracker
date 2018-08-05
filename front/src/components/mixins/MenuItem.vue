<template>
  <div class="menu-item" v-on:click="() => this.showChilds = !this.showChilds">
    <div class="name">
      <font-awesome-icon :icon="icon" v-if="icon !== null" /><span>{{ title }}</span>
    </div>
    <div class="childs" v-if="showChilds" v-for="child in childs" :key="child.name">
      <menu-item-child :title="child.name"></menu-item-child>
    </div>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import MenuItemChild from './MenuItemChild.vue';

export default {
  name: 'menuItem',
  props: [
    'title',
    'icon',
    'childs'
  ],
  components: {
    MenuItemChild
  },
  data: () => {
    return {
      showChilds: false,
    }
  },
};

</script>
<style>
  .menu-item {
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: all .15s ease;
    font-size: 0.9em;
    color: #333;
  }

  .menu-item .name {
      padding: 20px;
  }

  .menu-item span {
      margin-left: 15px;
  }
  .menu-item:hover {
    background: #EAEAEA;
  }
</style>
