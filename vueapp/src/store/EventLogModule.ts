import {Module} from 'vuex';
import { LeanPatient, PatientEvent } from '@/types';
import store from '@/store';
import Vue from '@/main';

interface PatientWithEvents extends LeanPatient {
  events: PatientEvent[]
}

interface EventLogState {
  patients: PatientWithEvents[]
}

const EventLogModule: Module<EventLogState, any> = {
  state: {
    patients: []
  },
  getters: {
    viewFriendlyPatients(state) {
      const result: Array<{header?: string} | {events: PatientEvent[], patient: PatientWithEvents}> = []
      state.patients.forEach(patient => {
        result.push({
          header: `${patient.firstName} ${patient.lastName}`,
          patient
      });
        result.push({events: patient.events, patient});
      });

      return result;
    }
  },
  mutations: {
    updatePatients(state, items: PatientWithEvents[]) {
      state.patients = items;
    }
  },
  actions: {
    async loadEvents({commit}) {
      const response = await Vue.$apollo.queries.allPatientEvents.refetch()
      commit('updatePatients', response.data.allPatientEvents.items)
    }
  },
  namespaced: true
};

export default EventLogModule;