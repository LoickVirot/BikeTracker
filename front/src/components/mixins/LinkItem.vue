<template>
  <span class="link-item">
    <router-link :to="to">
      <slot></slot>
    </router-link>
  </span>
</template>

<script>
export default {
  props: [
    'to'
  ],
}
</script>

<style>
  .link-item a {
    color: #333;
    text-decoration: none;
  }
</style>
