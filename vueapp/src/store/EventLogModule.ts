import {Module} from 'vuex';
import { LeanPatient, PatientEvent } from '@/types';
import store from '@/store';
import Vue from '@/main';
import {apollo} from '@/main'

interface PatientWithEvents extends LeanPatient {
  events: PatientEvent[];
}

interface EventLogState {
  patients: PatientWithEvents[];
  recentEvent: string | null
}

const EventLogModule: Module<EventLogState, any> = {
  state: {
    patients: [],
    recentEvent: ''
  },
  getters: {
    viewFriendlyPatients(state) {
      const result: Array<{header?: string} | {events: PatientEvent[], patient: PatientWithEvents}> = [];
      state.patients.forEach((patient) => {
        result.push({
          header: `${patient.firstName} ${patient.lastName}`,
          patient,
      });
        result.push({events: patient.events, patient});
      });

      return result;
    },
  },
  mutations: {
    updatePatients(state, items: PatientWithEvents[]) {
      state.patients = items;
    },
    updateRecentEvent(state, event) {
      state.recentEvent = event;
    }
  },
  actions: {
    async loadEvents({commit}) {
      const response = await apollo.queries.allPatientEvents.refetch();
      commit('updatePatients', response.data.allPatientEvents.items);
    },
    async loadMostRecent({commit}) {
      let result = ''
      try {
        const response = await apollo.queries.mostRecentEvent.refetch();
        result =response.data.mostRecentEvent.items[0].events.reverse()[0]
      } catch (e) {
        result = '';
      }
      commit('updateRecentEvent', result);
    },
  },
  namespaced: true,
};

export default EventLogModule;
