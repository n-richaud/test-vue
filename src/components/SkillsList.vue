<template>
  <v-container class="dashed">
    <v-layout
      align-start
      column
      wrap
    >
      <v-flex
        xs12
        mb-5
      >
        <!-- <h2 class="headline font-weight-bold mb-3">Ecosystem</h2> -->

       
      
          <v-layout justify-space-between mb-5 v-for="(skills, i) in skillsSummmary" :key="i"><div class="skillType">{{ skills.skillType }}</div> <div class="skillList">- {{ skills.skill.join(', ') }}</div></v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({

      skillsSummmary: [
        {
          skillType: 'Langages',
          skill: ['PHP5/7', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'C#', 'C', 'C++', 'scripts shell','Java', 'Python', 'PLSQL']
        },
        {
          skillType: 'Framework(s) et API(s)',
          skill: ['Symfony2/3/4', 'Jquery', 'Cakephp 2.3' , 'Bootstrap' , 'vue.js 2' , 'React']
        },
        {
          skillType: 'Serveur',
          skill: ['Nginx', 'Apache']
        },
        {
          skillType: 'Gestionnaire de version',
          skill: ['Git', 'GitLab' , 'BitBucket']
        },
        {
          skillType: 'Systeme',
          skill: ['Windows', 'Linux', 'Android', 'iOS', 'OS X']
        },
        {
          skillType: 'Methodologies',
          skill: ['méthodes agiles (scrum, Kanban)', 'TDD', 'BDD', 'versioning' , 'poker planning' , 'sprint planning']
        },
        {
          skillType: 'Conception',
          skill: ['UML']
        },
        {
          skillType: 'Webservices',
          skill: ['REST', 'SOAP']
        },
        {
          skillType: 'Autres outils et techno',
          skill: ['NetBeans', 'Xcode', 'Eclipse', 'Circle CI', 'Ansible', 'RabbitMQ']
        }
      ],
     
    })
  }
</script>

<style>
.skillType{
    text-transform: uppercase;

}
.skillList{
    width: 30%;
}

</style>