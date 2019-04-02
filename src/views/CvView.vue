<template>
<v-layout>
<v-container>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="page">
        
        <div class='v-card-body'>
        <Header/>
        <v-card-title primary-title class="dashed" >
          <div>
            <span class="headline mb-0"><h3 >Nicolas Richaud - Developpeur php</h3> <SidebarToggle/>   </span>
            <div> 4 ans d'expérience</div>
          </div>
        </v-card-title>
          

        <SkillsList/>
        <Formation/>
        </div>
      </v-card>
      
    </v-flex>
  </v-layout>

    <v-layout style="margin-top: 70px;">
    <v-flex xs12 sm8 offset-sm2>
      <v-card class="page" >
        <div class='v-card-body'>
        <Header/>
        <v-card-title primary-title >
                  
        
           
            <JobDescription/>
          
        </v-card-title>

<JobTeam/>
<JobSkills/>




      
        </div>
      </v-card>
      
    </v-flex>
  </v-layout>
    
    
  </v-container>
 <Sidebar/>
</v-layout>
  
</template>

<script>
  import SkillsList from '../components/SkillsList'
  import Formation from '../components/Formation'
  import Header from '../components/Header'
  import Sidebar from '../components/CV/Sidebar/Sidebar'
  import SidebarToggle from '../components/CV/Sidebar/SidebarToggle.vue'
  import JobResume from '../components/JobResume.vue'
  import JobDescription from '../components/JobDescription.vue'
  import JobSkills from '../components/JobSkills.vue'
  import JobTeam from '../components/JobTeam.vue'

  export default {
    components: {
      SkillsList,
      Formation,
      Header,
      Sidebar,
      SidebarToggle,
      JobResume,
      JobDescription,
      JobSkills,
      JobTeam
    }
    ,
    data () {
      return {
        drawer: null,
        items: [
        'PHP5/7', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'C#', 'C', 'C++', 'scripts shell','Java', 'Python', 'PLSQL'
      ]
      }
    }
  }
</script>
<style>
.v-card-body{
  margin-left: 94.4882px; margin-right: 75.1333px;
}
.page{
  width: 21cm;
  height: 29.7cm; 
}
</style>
