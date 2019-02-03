import gql from 'graphql-tag';

const allPatientEvents = gql`
query allPatientEvents {
  allPatientEvents: patientsList {
    items {
    	firstName
    	lastName
    	age
    	careGiver {
      	firstName
      	lastName
    	}
    	events
    }
  }
}`;

const allPatientsMed = gql`
{
    allPatientsMed: patientsList {
      items {
        firstName
        lastName
        age
        medicationList {
        items {
          drugName
          drugDosage
          drugFrequency
        drugLastAdmin
        drugEffectiveDuration
        }
      }
    }
  }
}`;

const allPatients =  gql`
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
}`;

const patientMedicationInformation = gql`
  query ($patientId: ID){
    patientMedInfo: patient(id: $patientId) {
      firstName
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
  }`;

const queries = {
  patientsList: allPatients,
  allPatientEvents: allPatientEvents,
  patientMedInfo: patientMedicationInformation,
  allPatientsMed: allPatientsMed
};



export default queries;