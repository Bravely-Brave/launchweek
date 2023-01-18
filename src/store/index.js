import { createStore } from 'vuex'

export default createStore({
  state: { //comme data mais le tableau sera accessible sur l'intégralité sur site 
    user : {
      firstname: 'Keith',
      lastname: 'UDANI',
      needs: ['UX/UI',"Javascript"]
    },

    students : [
      {
        firstname : 'Camila',
        lastname: 'Ogliastri',
        skills: ['UX/UI','Photoshop','inDesign','Javascript']
      },
      {
        firstname : 'Victor',
        lastname: 'Philippe',
        skills: ['Gestion de projet','Methode AGILE']
      },
      {
        firstname : 'Jeanne',
        lastname: 'Coric',
        skills: ['NodeJS','Photoshop','SEA/SEO']
      }
    ],

    matchingStudents : []
  },

  getters: {
  },

  mutations: { 
    filter(){
      const matchingStudents = state.students.filter(student => {
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