<template>
  <v-container>
    
    <v-layout
      align-start
      column
      wrap
    >
    <v-img
                  :src="`https://picsum.photos/500/300?image=${2 * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${2 * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                ></v-img>
    
                     <v-img
          src="http://www.abbeal.com/static/images/logo.png"
          aspect-ratio="2"
          position="right"
               
        ></v-img>

    </v-layout>
  </v-container>
</template>

<script>
import SidebarToggle from "./CV/Sidebar/SidebarToggle"
  export default {
    data: () => ({

      text:{content:'',visible:false},
      img:{src:'',visible:true}
     
    })
  }
</script>

<style>

</style>