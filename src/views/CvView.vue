<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card @click.stop="drawer = !drawer">
        <div class='v-card-body'>
        <Header/>
        <v-card-title primary-title >
          <div>
            <span class="headline mb-0"><h3 >Nicolas Richaud -Developpeur php</h3>    </span>
            <div> 4 ans d'expérience</div>
          </div>
        </v-card-title>
        <SkillsList/>
        <Formation/>
        </div>
      </v-card>
      
    </v-flex>
  </v-layout>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      fixed
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Synthèse des compétences</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Langages"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
        </v-layout>
        <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Framework(s) et API(s)"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Serveur"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Gestionnaire de version"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Systeme"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Methodologies"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Conception"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Webservices"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-select
                v-model="select"
                label="Autres outils et techno"
                chips
                tags
                :items="items"
              ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
    </v-navigation-drawer>
  </v-container>

  
</template>

<script>
  import SkillsList from '../components/SkillsList'
  import Formation from '../components/Formation'
  import Header from '../components/Header'

  export default {
    components: {
      SkillsList,
      Formation,
      Header
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
