import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import PrescriptionsVue from './screens/PrescriptionsVue.vue';
import MessagesVue from './screens/MessagesVue.vue';
import EventLogVue from './screens/EventLogVue.vue';
import IntegrationsVue from './screens/IntegrationsVue.vue';
import MusicVue from './screens/MusicVue.vue';
import ContactInfoVue from './screens/ContactInfo.vue';
import AllPatients from './screens/AllPatients.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/patients',
      name: 'Patients',
      component: () => import('./screens/AllPatients.vue'),
    },

    {
      path: '/prescriptions',
      name: 'Prescriptions',
      component: () => import('./screens/PrescriptionsVue.vue'),
    },
    {
      path: '/messages',
      name: 'Messages',
      component: () => import('./screens/MessagesVue.vue'),
    },
    {
      path: '/events',
      name: 'Event Log',
      component: () => import('./screens/EventLogVue.vue'),
    },
    {
      path: '/integration',
      name: 'Integrations',
      component: () => import('./screens/IntegrationsVue.vue'),
    },
    {
      path: '/music',
      name: 'Music',
      component: () => import('./screens/MusicVue.vue'),
    },
    {
      path: '/contact',
      name: 'Contact Information',
      component: () => import('./screens/ContactInfo.vue'),
    },
  ],
});
