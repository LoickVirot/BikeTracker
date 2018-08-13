import MapView from './components/pages/MapView.vue';
import BikeView from './components/pages/bike/BikeView.vue';
import SettingsView from './components/pages/settings/SettingsView.vue';

export default [
  { path: '/', component: MapView },
  { path: '/bike/:id', component: BikeView },
  { path: '/settings', component: SettingsView },
];
