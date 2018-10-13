import MapView from './components/pages/MapView.vue';
import BikeView from './components/pages/bike/BikeView.vue';
import AlertListView from './components/pages/bike/alerts/AlertListView.vue';
import LoginView from './components/pages/auth/LoginView.vue';
import SettingsView from './components/pages/settings/SettingsView.vue';

export default [
  { path: '/', component: MapView },
  { path: '/bike/:id', component: BikeView },
  { path: '/bike/:id/alerts', component: AlertListView },
  { path: '/settings', component: SettingsView },
  { path: '/login', component: LoginView },
];
