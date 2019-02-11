<template>
<v-layout>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card >
        <div class='v-card-body'>
        <Header/>
        <v-card-title primary-title >
          <div>
            <span class="headline mb-0"><h3 >Nicolas Richaud - Developpeur php</h3>    </span>
            <div> 4 ans d'expérience</div>
          </div>
        </v-card-title>
          
<SidebarToggle/>
        <SkillsList/>
        <Formation/>
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

  export default {
    components: {
      SkillsList,
      Formation,
      Header,
      Sidebar,
SidebarToggle
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
</style>
