// <template>
//     <div id="nav">
//       <router-link to="/">Voir le profil</router-link> |
//       <router-link to="/about">Editer le profil</router-link> |
//       <router-link to="/cv/">Exporter le profil</router-link> |

//     </div>
// </template>


<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <span class="headline mb-0"><h3 >Nicolas Richaud</h3><i>dernière edition le : 02/09/1993</i> </span>
            <div>Developpeur php - 4 ans d'expérience</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" to="/cv/view">Voir</v-btn>
          <v-btn flat color="green">éditer</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="green">exporter</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>