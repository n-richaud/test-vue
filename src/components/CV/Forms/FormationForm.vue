<template>
      <v-form v-model="valid">
    <v-container>
        <v-list-tile-title>Diplome et certification</v-list-tile-title>
      <v-layout>
          
       <v-text-field label="Diplome"
            placeholder="Licence master...."></v-text-field>

      </v-layout>
      <v-layout>
               <v-text-field label="Certification"
            placeholder="Certif symfo , agile , netsec ..."></v-text-field>
      </v-layout>
    </v-container>
  </v-form>
</template>



<script>

  export default { 
    data () {
      return {
        items: [
        'PHP5/7', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'C#', 'C', 'C++', 'scripts shell','Java', 'Python', 'PLSQL'
      ], skills:[]
      }
    }
  }
</script>