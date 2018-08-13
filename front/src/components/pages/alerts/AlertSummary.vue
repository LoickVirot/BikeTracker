<template>
  <div :class="!radius ? 'alerts alerts-no-radius': 'alerts'">
    <alert-item 
    v-for="(alert, index) in selectedBike.alerts"
    :key="index"
    :date="alert.date" 
    :message="alert.content"
    :level="alert.level"></alert-item>
  </div>
</template>
<script>
/* eslint linebreak-style: ["error", "windows"] */
import { mapGetters } from 'vuex';
import AlertItem from './AlertItem.vue';

export default {
  name: 'alertSummary',
  components: {
    AlertItem,
  },
  props: {
    radius: {
      default: true
    }
  },
  data() {
    return {
      alerts: [],
    }
  },
  beforeMount() {
    if (this.radius === undefined) {
      this.radius = false;
    }
  },
  computed: {
    ...mapGetters([
      'selectedBike'
    ]),
  }
};

</script>
<style>
.alerts {
  border: 1px solid #DDD;
  border-radius: 8px;
  overflow: hidden;
}

.alerts.alerts-no-radius {
  border-radius: 0px;
  border-right: none;
}

.alert:last-child {
  border-bottom: none;
}
</style>
