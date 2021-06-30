import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Status = () => import('./pages/admin/Status.vue');
const Credits = () => import('./pages/admin/Credits.vue');
const Archives = () => import('./pages/admin/Archives.vue');
const Settings = () => import('./pages/admin/Settings.vue');
const Documentation = () => import('./pages/admin/Documentation.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Archives',
    path: '/admin/archives',
    component: Archives,
  },
  {
    name: 'Credits',
    path: '/admin/credits',
    component: Credits,
  },
  {
    name: 'Documentation',
    path: '/admin/documentation',
    component: Documentation,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    component: Settings,
  },
  {
    name: 'Status',
    path: '/admin/status',
    component: Status,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
