import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
};


export default new Vuex.Store({
  state: {
    sidebarOpen: true,
    formation : {"diplome":" - Licence Informatique, parcours ingénierie logicielle, CERI Avignon"},
    items: {
      "languages":[
      'PHP5/7', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'C#', 'C', 'C++', 'scripts shell','Java', 'Python', 'PLSQL'
      ],
      "framework":['Symfony','Laravel','Spring','jhipster',"react",'vuejs','angular'],
      "server":['Linux','debian','bsd','iss'],
      "versioningTools":['git','svn'],
      "system":['debian','windows'],
      "methodology":['agile','Pair programming','Sprint planning'],
      "conception":['Uml'],
      "webservice":['REST','SOAP'],
      "other":['netbeans','Xcode','PHPStorm']
    },
    skills : {
      "languages":[
        'PHP5/7', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'C#', 'C', 'C++', 'scripts shell','Java', 'Python', 'PLSQL'
        ],
    }
  },
  getters: {
    sidebarOpen: state => state.sidebarOpen,   
  },
  mutations: {
    [types.TOGGLE_SIDEBAR](state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    SET_FORMATION(state,formation){
      state.formation = Object.assign({}, state.formation,formation)
    },
    SET_SKILLS(state,skills){
      state.skills = Object.assign({}, state.skills,skills)
    }
  },
  actions: {
    GET_FORMATION({commit},id){
      return state.formation
    },
    GET_SKILLS({commit},id){
      return state.skills
    },
    toggleSidebar({ commit, state }) {
      commit(types.TOGGLE_SIDEBAR);
    },
  },
});
