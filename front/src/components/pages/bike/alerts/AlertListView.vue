<template>
  <div class="bike-alert-view">
    <router-link :to="'/bike/' + selectedBike.id" class="btn btn-secondary">
      <button-item type="secondary">
        <font-awesome-icon icon="arrow-left"></font-awesome-icon> {{ selectedBike.name }}
      </button-item>
    </router-link>
    <h1>Toutes les alertes</h1>
    <card-box>
      <alert-summary />
    </card-box>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import CardBox from './../../../mixins/card/CardBox.vue';
import CardContent from './../../../mixins/card/CardContent.vue';
import AlertSummary from '../../alerts/AlertSummary.vue';
import ButtonItem from '../../../mixins/form/ButtonItem.vue'

export default {
  components: {
    CardBox,
    CardContent,
    AlertSummary,
    ButtonItem
  },
  data() {
    return {
      markers: [
        {
          position: [0, 0],
          name: 'Test',
        },
      ],
      battery: 100,
    };
  },
  computed: {
    ...mapGetters([
      'selectedBike'
    ]),
  },
  beforeMount() {
    this.loadBike(this.$route.params.id);
  },
  methods: {
    loadBike(id) {
      this.$store.dispatch('selectBikeById', id);
    }
  }
};
</script>
<style>
.bike-alert-view {
  padding: 40px;
}

</style>
