<template>
  <v-layout>

<FormationForm/>

  </v-layout>
</template>

<script>
  import {TweenMax, Power4} from 'gsap'
  import FormationForm from "../Forms/FormationForm.vue" 
  export default {
    name: 'sidebar',
    components:{
        FormationForm
    },
    mounted () {
      TweenMax.set(this.$el, {
        x: this.$el.offsetWidth
      })
    },
    computed: {
      open () {
        return this.$store.state.sidebarOpen
      }
    },
    watch: {
      open: function (open) {
        const dX = open ? 0 : this.$el.offsetWidth
        TweenMax.to(this.$el, 1, {
          x: dX,
          ease: Power4.easeOut
        })
      }
    }
  }
</script>