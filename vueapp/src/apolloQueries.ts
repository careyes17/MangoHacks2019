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
}`

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
}`

const queries = {
  patientsList: allPatients,
  allPatientEvents: allPatientEvents,


};



export default queries;