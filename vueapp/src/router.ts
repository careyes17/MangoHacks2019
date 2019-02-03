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
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/patients',
      name: 'Patients',
      component: AllPatients,
    },

    {
      path: '/prescriptions',
      name: 'Prescriptions',
      component: PrescriptionsVue,
    },
    {
      path: '/messages',
      name: 'Messages',
      component: MessagesVue,
    },
    {
      path: '/events',
      name: 'Event Log',
      component: EventLogVue,
    },
    {
      path: '/integration',
      name: 'Integrations',
      component: IntegrationsVue,
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicVue,
    },
    {
      path: '/contact',
      name: 'Contact Information',
      component: ContactInfoVue,
    },
  ],
});
