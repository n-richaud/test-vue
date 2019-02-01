<template>
  <v-container>
    <v-layout
      align-start
      column
      wrap
    >
                     <v-img
          src="http://www.abbeal.com/static/images/logo.png"
          aspect-ratio="2"
          position="right"
               
        ></v-img>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({

      text:{content:'',visible:false},
      img:{src:'',visible:true}
     
    })
  }
</script>

<style>

</style>