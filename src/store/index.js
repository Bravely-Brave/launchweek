import { createStore } from 'vuex'

export default createStore({
  state: { //comme data mais le tableau sera accessible sur l'intégralité sur site 
    user : [
      {
        firstname: 'Keith',
        lastname: 'UDANI',
        needs: ['UX/UI',"Javascript"]
      }
    ],

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
    ]
  },

  getters: {
  },

  mutations: { 
    filter(){
      state.students.skills()
    }
  },

  actions: {
  },
  modules: {
  }
})