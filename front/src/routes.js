import MapView from './components/pages/MapView.vue';
import BikeView from './components/pages/bike/BikeView.vue';
import AlertListView from './components/pages/bike/alerts/AlertListView.vue';
import LoginView from './components/pages/auth/LoginView.vue';
import SettingsView from './components/pages/settings/SettingsView.vue';

export default [
  { name: 'home', path: '/', component: MapView },
  { name: 'bike_index', path: '/bike/:id', component: BikeView },
  { name: 'bike_alerts_index', path: '/bike/:id/alerts', component: AlertListView },
  { name: 'settings', path: '/settings', component: SettingsView },
  { name: 'login', path: '/login', component: LoginView },
];
