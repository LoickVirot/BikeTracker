<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<style>
  .card {
    background: #FFF;
    border-radius: 8px;
    /* border: 1px solid #CCC; */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .card h2 {
    margin: 0;
  }

  .card .card-content {
    padding: 10px;
  }

</style>
