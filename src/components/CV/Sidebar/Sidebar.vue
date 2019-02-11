<template>
  <div  class="sidebar">
  <v-layout>

    <v-flex xs3 sm3>cacher l'éditeur</v-flex>
    <v-spacer></v-spacer>
    <v-flex xs6 sm6>
      <select
      
                v-model="currentTab"
                
                
                >
                <option v-for="(key,value) in items " v-bind:key="key" :value="key" >{{value}}</option>
                </select>
                </v-flex>
                <v-spacer></v-spacer>
                
    <v-flex xs3 sm3>status saved</v-flex>

</v-layout>
<v-container>
<v-layout>
<v-flex xs12 sm12>
  
  <keep-alive>
    <component
      v-bind:is="currentTabComponent"
      
    ></component>
    <!-- <FormationForm/> -->
  </keep-alive>
  </v-flex>
  </v-layout>
</v-container>  
</div>
</template>

<script>
  import {TweenMax, Power4} from 'gsap'
  import FormationForm from "../Forms/FormationForm.vue" 
  import SkillsListForm from "../Forms/SkillsListForm.vue"
  export default {
    name: 'sidebar',
    components:{
        FormationForm,
        SkillsListForm
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
    },
    data () {
      return {
        items: {
        'Synthese des compétences':'SkillsListForm', 'Formation ':'FormationForm'
      },
      currentTab : ''
      }
    },
    computed: {
    currentTabComponent: function () {
      console.log(this.currentTab)
      return this.currentTab
    }
  }
  }
</script>

<style>
.sidebar{
  border-radius:4px;
  width: 27vw;
  position: fixed;
  z-index: 1;
  top: 100px;
  left: -24vw;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;
  height: auto;
  max-height: 80vh;
}
</style>
