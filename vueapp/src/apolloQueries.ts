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
query allPatientsMed {
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
  query allPatients {
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
  query patientMedInfo ($patientId: ID){
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

const mostRecentEvent = gql`
query mostRecentEvent {
  mostRecentEvent: patientsList {
    items {
      firstName
      lastName
      events
      careGiver {
        firstName
        lastName
      }
    }
  }
}
`;

const queries = {
  patientsList: allPatients,
  allPatientEvents,
  patientMedInfo: patientMedicationInformation,
  allPatientsMed,
  mostRecentEvent,
};



export default queries;
