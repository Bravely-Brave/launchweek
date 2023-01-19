import { createStore } from 'vuex'

export default createStore({
  state: { //comme data mais le tableau sera accessible sur l'intégralité sur site 
    user : {
      firstname: 'Jane',
      lastname: 'DOE',
      needs: ['Front-end',"Back-end","Protoype UI/UX"]
    },

    studentInfo :[
      {
        firstname : 'Camila',
        lastname: 'Ogliastri',
        class: 'A4 Créa/design',
        skills: ['Front-end','Prototype UI/UX','Illustrator','AfterEffects'],
      },
      {
        firstname : 'Victor',
        lastname: 'Philippe',
        class: 'A2 Communication digitale & e-buisness',
        skills: ['Gestion de projet','Marketing digital', 'Planning éditorial']
      },
      {
        firstname : 'Lou',
        lastname: 'Berluette',
        class: 'A5 Jeux vidéos',
        skills: ['Back-end','C++','C#','Unreal']
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