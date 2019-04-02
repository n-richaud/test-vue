<template>
  <v-container class="dashed">
    <v-layout
      align-start
      column
      wrap
    >
      <v-flex
        xs12
        mb-6
      >
        <!-- <h2 class="headline font-weight-bold mb-3">Ecosystem</h2> -->

       <h4 class="headline font-weight-bold mb-3 title">équipe </h4>
      
          <v-layout  v-for="(Member, i) in Jobteam" :key="i"><div class="skillType">•  {{ Member.name }}</div> </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({

      Jobteam: [
        {
          name: 'Lead developer (back et front)',
          number : 1
        },
        {
          name: 'Développeur front',
          number : 1
        },{
          name: 'Junior Développeur (back et front)',
          number : 1
        }
      ],
     
    })
  }
</script>

<style scoped>

.skillList{
    width: 80%;
    font-weight: bold;
}

</style>