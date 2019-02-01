<template>
  <v-app>
    <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Abbeal</span>
        <span class="font-weight-light">SKILL MANAGEMENT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Voir le profil</v-btn>
      <v-btn flat to="/about">about</v-btn>
      <v-btn flat to="/cv/">Voir mon dossier</v-btn>
    </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
