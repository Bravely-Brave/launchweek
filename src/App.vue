<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>

  <header class="px-3 bg-slate-300">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>

    
  </header>

  <div class="p-10 bg-gray-600 text-white">
      <h1 class="text-2xl">Bonjour {{ myProfile.firstname }}</h1>
      <h2>Ta recherche actuelle : <span v-for="need, key, index in myProfile.needs" :key="need">{{ need }},</span></h2>

      <p class="pt-7">Personnes qui peuvent t'aider : </p>
      <div v-for="studentInfo in matchingStudents" :key="studentInfo.firstname" class="py-8">
          <p>{{ studentInfo.firstname }}</p>   
          <p>{{ studentInfo.lastname }}</p>   
          <ul v-for="skill in studentInfo.skills" :key="skill">
            <li>{{ skill }}</li>
          </ul>
      </div>
    </div>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
  export default { 
      name: 'App',

      computed: {
        matchingStudents() {
          return this.$store.state.students.filter(student => {
            return student.skills.some(skill => this.$store.state.user.needs.includes(skill))
          })
        },
        myProfile() {
          return this.$store.state.user
        }
      },
    }
  
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 25rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

