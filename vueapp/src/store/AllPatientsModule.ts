import {Module} from 'vuex';
import { LeanPatient } from '@/types';
import store from '@/store';
import Vue from '@/main';

interface AllPatientsState {
  currentPatient?: LeanPatient | null;
  patients: LeanPatient[];
}

const AllPatientsModule: Module<AllPatientsState, any>   = {
  state: {
    patients: [],
    currentPatient: null,
  },
  getters: {
    numPatients(state) {
      return state.patients.length;
    },
  },
  mutations: {
    updateCurrentPatient(state, patient: LeanPatient) {
      // state.currentPatient = patient;
      Vue.$set(state, 'currentPatient', patient);
    },
    updatePatientsList(state, patients: LeanPatient[]) {
      // state.patients = patients || [];
      Vue.$set(state, 'patients', patients || []);
      console.log('patients', state.patients);
    },
  },
  actions: {
    async getAllPatients(context) {
      const result = await Vue.$apollo.queries.patientsList.refetch();
      context.commit('updatePatientsList', result.data.patientsList.items);
      console.log(result);
    },
  },
  namespaced: true,
};

export default AllPatientsModule;
