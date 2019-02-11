<template>
<v-layout>
<v-container>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <v-card >
        <Header/>
        <div class='v-card-body'>
        
        <v-card-title primary-title >
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
      <v-card >
        <div class='v-card-body'>
        <Header/>
        <v-card-title primary-title >
          <div>
            <span class="headline mb-0"><h3 >Nicolas Richaud - Developpeur php</h3>    </span>
            <div> 4 ans d'expérience</div>
          </div>
        </v-card-title>
          
EXPÉRIENCE(S)

Mister-Auto                                            1 mois : Janvier 2018

Sujet du projet : Amélioration des performances de l’appli et de l’environnement de dev 
              
Mister-Auto est un site e-commerce de vente de pièces automobiles.

Responsabilités occupées : 
Développeur / Devops

Équipe : 
Lead developer (back et front)
1 Développeur front    
2 Junior Développeur (back et front)

Travail réalisé : 
              
Profiling de l’appli avec blackfire, et écriture de recommandation
Profiling de la génération des assets 
Investigation source slowqueries Mysql
Optimisation farm docker de dev
Soutien aux developpeur junior 


Langage : PHP,Javascript ES6, HTML, Sass/CSS
Framework(s): Zend Expressive, Doctrine, AngularJs
Versionning : Github (gitFLow)
Système : Windows 10, Linux debian
Méthodologie : Peer Review, Poker Planning, Sprint Planning
Outils de développement : Sublime text /PhPstorm /Vscode
Base de données : Mysql
Autres : RabbitMQ, Supervisor, Esendex,Redis

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
