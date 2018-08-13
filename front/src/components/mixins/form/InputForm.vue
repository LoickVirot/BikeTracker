<template>
  <input :type="type" :placeholder="placeholder" :value="value"/>
</template>
<script>
export default {
  props: [
    'type',
    'placeholder',
    'value'
  ],
};
</script>
<style>
  input {
    box-sizing: border-box;
    display: block;
    margin: 10px 0;
    padding: 10px 14px;;
    border-radius: 8px;
    border: 1px solid #CCC;
    font-size: 1em;
    width: 100%;
  }

  input:disabled {
    background: #EAEAEA;
  }
</style>
