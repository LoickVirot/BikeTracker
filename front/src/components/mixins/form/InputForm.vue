<template>
  <input :type="type" :placeholder="placeholder" @input="updateValue($event.target.value)" v-model="mutableValue"/>
</template>
<script>
export default {
  props: [
    'type',
    'placeholder',
    'value',
  ],
  data() {
    return {
      mutableValue: this.value
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
};
</script>
<style>
  input {
    box-sizing: border-box;
    display: block;
    margin: 10px 0;
    padding: 15px;
    border-radius: 3px;
    border: 2px solid #EAEAEA;
    background: #f9f9f9;
    font-size: 1em;
    width: 100%;
  }

  input:disabled {
    background: #EAEAEA;
  }
</style>
