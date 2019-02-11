<template>
      <v-form v-model="valid">
    <v-container>
        <v-list-tile-title>Synthèse des compétences</v-list-tile-title>
      <v-layout>
          
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
                v-model="select"
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
      ]
      }
    }
  }
</script>