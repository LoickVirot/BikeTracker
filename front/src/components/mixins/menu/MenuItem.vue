<template>
  <div class="menu-item">
    <router-link :to="link">
      <div class="name" v-on:click="() => this.showChilds = !this.showChilds">
        <font-awesome-icon :icon="icon" v-if="icon !== null" /><span>{{ title }}</span>
      </div>
    </router-link>
    <div class="childs" v-if="showChilds">
      <div class="child" v-for="child in childs" :key="child.id">
        <menu-item-child :title="child.name" :url="child.url"></menu-item-child>
      </div>
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
    'childs',
    'link'
  ],
  components: {
    MenuItemChild
  },
  data() {
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

  .menu-item a {
    color: #333;
    text-decoration: none;
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
