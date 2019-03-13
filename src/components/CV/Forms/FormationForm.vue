<template>
      <v-form  @submit.prevent="savePage">
    <v-container>
        <v-list-tile-title>Diplome et certification</v-list-tile-title>
      <v-layout>
          
       <v-text-field label="Diplome" :value="formation.diplome" @input="UpdateDiplome"
            placeholder="Licence master...."></v-text-field>

      </v-layout>
      <v-layout>
               <v-text-field label="Certification" :value="formation.certification" @input="UpdateCertification"
            placeholder="Certif symfo , agile , netsec ..."></v-text-field>
      </v-layout>
         
    </v-container>
  </v-form>
</template>



<script>
import {mapState} from'vuex'
  export default { 
    
    computed: mapState(['formation']),
    methods: {
    SavePage() {
      this.$store.dispatch('PUT_PAGE')
      	.then(() => this.$emit('saved'))
    },
    UpdateDiplome(val) {
      this.$store.commit('SET_FORMATION', { diplome: val })
    },
    UpdateCertification(val) {
      this.$store.commit('SET_FORMATION', { certification: val })
    }
    }

    
  }
</script>