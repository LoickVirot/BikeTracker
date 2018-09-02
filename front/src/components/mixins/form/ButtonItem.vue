<template>
  <button :class="classes" @click="onClick">{{ this.value }}</button>
</template>
<script>
export default {
  props: [
    'type',
    'value',
    'onClick'
  ],
  data() {
    return {
      classes: 'btn ',
    };
  },
  beforeMount() {
    if (this.type !== undefined) {
      this.classes += this.type;
    }
  },
  methods: {
    emitClickEvent() {
      this.$emit('clicked');
    }
  }
};
</script>
<style>
  .btn {
    height: 40px;
    border-radius: 20px;
    padding: 0 15px;
    border: none;
    font-size: 0.9em;
    cursor: pointer;
  }

  .btn.primary {
    background: #42b883;
    color: #FFF;
    font-weight: bold;
  }
</style>
