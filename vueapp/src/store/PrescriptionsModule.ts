import {Module} from 'vuex';
import { LeanPatient, PatientEvent } from '@/types';
import store from '@/store';
import Vue from '@/main';

interface Prescription {
  drugDosage: number,
  drugEffectiveDuration: number, // hours
  drugFrequency: number, //4 per day
  drugLastAdmin: Date,
  drugName: string
}

interface PatientWithPrescription extends LeanPatient {
  medicationList: {items: Prescription[]}
}

interface PrescriptionState {
  patients: PatientWithPrescription[]
}

const PrescriptionModule: Module<PrescriptionState, any> = {
  state: {
    patients: []
  },
  getters: {
    viewPrescriptionInfo(state) {
      const result: Array<{header?: string} | {prescriptions: Prescription[], patient: PatientWithPrescription}> = [];
      state.patients.forEach(patient => {
        result.push({header: `${patient.firstName} ${patient.lastName}`})
        result.push({patient, prescriptions: patient.medicationList.items})
      });

      return result;
    }
  },
  mutations: {
    updatePrescriptions(state, payload) {
      state.patients = payload;
    }
  },
  actions: {
    async loadPrescriptions({commit}) {
      const response = await Vue.$apollo.queries.allPatientsMed.refetch()
      commit('updatePrescriptions', response.data.allPatientsMed.items)
    }
  },
  namespaced: true
};

export default PrescriptionModule;