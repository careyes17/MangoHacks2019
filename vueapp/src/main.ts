import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import VueTimeago from 'vue-timeago';
import VueApollo from 'vue-apollo';
import { createProvider } from './vue-apollo';
import queries from './apolloQueries';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const vue = new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  apollo: queries,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  },
);

export const apollo = vue.$apollo;
export default vue;
