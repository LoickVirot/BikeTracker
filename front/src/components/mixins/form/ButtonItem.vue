<template>
  <button :class="classes" @click="onClickAction">
    {{ this.value }}
    <slot></slot>
  </button>
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
      onClickAction: () => {return false}
    };
  },
  beforeMount() {
    if (this.type !== undefined) {
      this.classes += this.type;
    }
    if (this.onClick !== undefined) {
      this.onClickAction = this.onClick
    }
  },
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
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  }

  .btn.primary {
    background: #42b883;
    color: #FFF;
  }

  .btn.secondary {
    background: none;
    color: #AAA;
    font-size: 1.4em;
    padding: 0;
  }
</style>
