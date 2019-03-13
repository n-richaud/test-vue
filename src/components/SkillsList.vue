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
        <!-- <h2 class="headline font-weight-bold mb-3">Ecosystem</h2> -->

       
      
          <v-layout justify-space-between mb-5 v-for="(skill, i) in skills" :key="i">
            <div class="skillType">{{ skillsLabel[i+""] }}-{{i}}</div>
            <div class="skillList">{{skill.join("-")}}-</div>
          </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import {mapState,mapGetters} from'vuex'
  export default {
    computed: mapState(['skills']),
    data: () => ({

      skillsLabel: {
        Languages: 'Langages'
        }
      //   {
      //     id:'framework',
      //     skillType: 'Framework(s) et API(s)',   
      //   },
      //   {
      //     id:'server',
      //     skillType: 'Serveur',      
      //   },
      //   {
      //     id:'versioningTools',
      //     skillType: 'Gestionnaire de version',
      //   },
      //   {
      //     id:'system',
      //     skillType: 'Systeme',
      //   },
      //   {
      //     id:'methodology',
      //     skillType: 'Methodologies',
      //   },
      //   {
      //     id:'conception',
      //     skillType: 'Conception',
      //   },
      //   {
      //     id:'webservices',
      //     skillType: 'Webservices',
      //   },
      //   {
      //     id:'other',
      //     skillType: 'Autres outils et techno',
      //   }
      // ],
     
    })
  }
</script>

<style>
.skillType{
    text-transform: uppercase;

}
.skillList{
    width: 30%;
}

</style>