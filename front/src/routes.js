import MapView from './components/pages/MapView.vue';
import BikeView from './components/pages/bike/BikeView.vue';

export default [
  { path: '/', component: MapView },
  { path: '/bike/id', component: BikeView },
];
