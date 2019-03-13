<template>
      <v-form >
    <v-container>
        <v-list-tile-title>Synthèse des compétences</v-list-tile-title>
      <v-layout>
          
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.languages"
                label="Langages"
                chips
                tags
                :items="items.languages"
                @input="UpdateLanguages"
              ></v-combobox>
        </v-flex>
        </v-layout>
        <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.framework"
                label="Framework(s) et API(s)"
                chips
                tags
                :items="items.framework"
                @input="UpdateFramework"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.server"
                label="Serveur"
                chips
                tags
                :items="items.server"
                @input="UpdateServer"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.versioningTools"
                label="Gestionnaire de version"
                chips
                tags
                :items="items.versioningTools"
                @input="UpdateVersioningTools"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.system"
                label="Systeme"
                chips
                tags
                :items="items.system"
                @input="UpdateSystem"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.methodology"
                label="Methodologies"
                chips
                tags
                :items="items.methodology"
                @input="UpdateMethodology"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.conception"
                label="Conception"
                chips
                tags
                :items="items.conception"
                @input="UpdateConception"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.webservice"
                label="Webservices"
                chips
                tags
                :items="items.webservice"
                @input="UpdateWebservice"
              ></v-combobox>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex
         sm12 d-flex
        >
          <v-combobox
                :value="skills.other"
                label="Autres outils et techno"
                chips
                tags
                :items="items.other"
                @input="UpdateOther"
              ></v-combobox>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>



<script>
import {mapState} from'vuex'
  export default { 
    computed: mapState(['skills','items']),
    methods: {
    SavePage() {
      this.$store.dispatch('PUT_PAGE')
      	.then(() => this.$emit('saved'))
    },
    UpdateLanguages(val) {
      this.$store.commit('SET_SKILLS', { languages: val })
    },
    UpdateFramework(val) {
      this.$store.commit('SET_SKILLS', { framework: val })
    },
    UpdateServer(val){
      this.$store.commit('SET_SKILLS', { server: val })
    },
    UpdateVersioningTools(val){
      this.$store.commit('SET_SKILLS', { versioningTools: val })
    },
    UpdateSystem(val){
      this.$store.commit('SET_SKILLS', { system: val })
    },
    UpdateMethodology(val){
      this.$store.commit('SET_SKILLS', { methodology: val })
    },
    UpdateConception(val){
      this.$store.commit('SET_SKILLS', { conception: val })
    },
    UpdateWebservice(val){
      this.$store.commit('SET_SKILLS', { webservice: val })
    },
    UpdateOther(val){
      this.$store.commit('SET_SKILLS', { other: val })
    }
    },
  }
</script>