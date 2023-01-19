<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
  <router-view></router-view>
  <nav class="bg-slate-50">
    <router-link to="/"></router-link> 
    <router-link to="/main"><img src="./assets/profil.png" alt=""></router-link>
  </nav>
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
};
</script>

<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

