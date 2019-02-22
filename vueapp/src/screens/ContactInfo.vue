<template>
  <div>
    <v-btn>
      Text
    </v-btn>
    
    <ApolloQuery :query="require('@/graphql/patientFirstNames.gql')">
      <!-- The result will automatically updated -->
      <template slot-scope="{ result: { data, loading } }">
        <!-- Some content -->
        <div v-if="loading">Loading...</div>
        <ul v-else>
          <li v-for="user of data.patientsList.items" :key="user.firstName" class="user" @click="newData(data)">
            <!-- {{user}} -->
            {{ user.firstName }}: {{user.__typename}}
          </li>
        </ul>
      </template>
    </ApolloQuery>

  </div>


  
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {

    };
  },
  methods: {
    newData(data: any) {
      console.log(data);
    }
  ,}
});
</script>

<style lang="scss">

</style>
