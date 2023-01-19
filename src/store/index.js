import { createStore } from 'vuex'

export default createStore({
  state: { //comme data mais le tableau sera accessible sur l'intégralité sur site 
    user : {
      firstname: 'Keith',
      lastname: 'UDANI',
      needs: ['NodeJS',"Javascript"]
    },

    studentInfo :[
      {
        firstname : 'Camila',
        lastname: 'Ogliastri',
        class: 'A4 Créa/design',
        skills: ['UX/UI','Photoshop','inDesign','Javascript'],
      },
      {
        firstname : 'Victor',
        lastname: 'Philippe',
        skills: ['Gestion de projet','Methode AGILE']
      },
      {
        firstname : 'Jeanne',
        lastname: 'Coric',
        class: 'A2 Communication digitale & e-buisness',
        skills: ['NodeJS','Photoshop','SEA/SEO']
      }
    ],

    matchingStudents : []
  },

  getters: {
  },

  mutations: { 
    filter(){
      const matchingStudents = state.studentInfo.filter(student => {
        return student.skills.some(skill => state.user.needs.includes(skill))
      })
      state.matchingStudents = matchingStudents

    },

      
  },

  actions: {
  },
  modules: {
  }
})