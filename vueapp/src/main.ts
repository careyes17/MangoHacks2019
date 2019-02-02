import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import { createProvider } from './vue-apollo';
import gql from 'graphql-tag';

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  apollo: {
    patientsList: gql`
      {
        patientsList{
          items{
            firstName
            lastName
            age
            careGiver{
              firstName
              lastName
            }
            events
            medicationList{
            items{
              drugName
              drugDosage
              drugFrequency
              drugLastAdmin
              drugEffectiveDuration
              }
            }
          }
        }
      }
    `
  },
  render: (h) => h(App)
}).$mount('#app');

export default vue;
