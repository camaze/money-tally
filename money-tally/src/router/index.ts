import Vue from 'vue';
// import VueRouter, {RouteConfig} from 'vue-router';
import VueRouter from 'vue-router';

import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

// const routes: Array<RouteConfig> = [
const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/labels',
    name: 'Labels',
    component: Labels
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '*',
    component: NotFound
  }

];

const router = new VueRouter({
  routes
});

export default router;
