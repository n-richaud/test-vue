<template>
      <v-form v-model="valid">
    <v-container>
        <v-list-tile-title>Synthèse des compétences</v-list-tile-title>
      <v-layout>
          
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.languages"
                label="Langages"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
        </v-layout>
        <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.framework"
                label="Framework(s) et API(s)"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.server"
                label="Serveur"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.VersioningTools"
                label="Gestionnaire de version"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.system"
                label="Systeme"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.methodology"
                label="Methodologies"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.conception"
                label="Conception"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.webservice"
                label="Webservices"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="skills.other"
                label="Autres outils et techno"
                chips
                tags
                :items="items"
              ></v-combobox>
        </v-flex>
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