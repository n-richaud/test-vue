<template>
  <v-container class="dashed">
    <v-layout
      align-start
      column
      wrap
    >
      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3 title">formation </h2>

       
      
          <div v-for="(formation, i) in formationSummmary" :key="i"><strong>{{ formation.type }}</strong> - {{ formation.formation.join(', ') }}</div>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({

      formationSummmary: [
        {
          formationType: 'Diplome',
          formation: ['Licence Informatique, parcours ingénierie logicielle, CERI Avignon']
        },
        {
          formationType: 'Certification',
          formation: ['']
        },
       
      ],
     
    })
  }
</script>

<style>
.title{
    text-transform: uppercase;
    color: #7ef36b;
    font-size: 26px; 

}
</style>