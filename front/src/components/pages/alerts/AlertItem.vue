<template>
<div :class="className">
  <div class="alert-date">{{ formatedDate }}</div>
  <div class="alert-content">{{ message }}</div>
</div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import AlertLevel from '../../../enum/AlertLevel.js';

export default {
  name: 'alertItem',
  props: [
    'date',
    'message',
    'level'
  ],
  data() {
    return {
      className: 'alert ',
      formatedDate: ''
    }
  },
  beforeMount() {
    this.chooseAlertColor();
    this.formatDate();
  },
  watch: {
    level: function() {
      this.chooseAlertColor();
      this.formatDate();
    }
  },
  methods: {
    chooseAlertColor() {
      this.className = 'alert ';
      switch(parseInt(this.level)) {
        case AlertLevel.CRITICAL:
          this.className += 'alert-critical'
          break;
        case AlertLevel.WARNING:
          this.className += 'alert-warning'
          break;
        case AlertLevel.NORMAL:
          this.className += 'alert-normal'
          break;
      }
    },
    formatDate() {
      this.formatedDate = this.date.toLocaleTimeString('fr-FR', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',        
      });
    }
  }
};

</script>
<style>

.alert {
  padding: 10px;
  border-left: #FFF 5px solid;
  border-bottom: 1px solid #DDD;
}

.alert .alert-date {
  font-size: 0.7em;
  color: #999;
  text-transform: capitalize;
}

.alert.alert-normal {
  border-left: #40b883 5px solid;
}

.alert.alert-warning {
  border-left: #ffd14d 5px solid;
}

.alert.alert-critical {
  border-left: #ff5151 5px solid;
}

.alert a {
  color: inherit;
  text-decoration: none;
  font-size: 0.9em;
}
</style>
