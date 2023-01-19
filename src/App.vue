<!-- <script setup>
</script> -->


<template scoped>
  <nav class="bg-slate-50 p-6 font-bold">
    <router-link to="/"></router-link>
    <router-link to="/help"></router-link> 
    <router-link to="/main"></router-link> 
    <router-link to="/forum"></router-link> 
    <router-link to="/favorites"></router-link> 
    <router-link to="/chats"></router-link> 
    <router-link to="/profile"></router-link>
  </nav>
  <img src="./assets/switch.png" alt="" class="absolute z-10 right-10">
  <img src="./assets/decorose.png" alt="" class="absolute top-0 w-52">
  <img src="./assets/decoviolet.png" alt="" class="absolute bottom-14 w-24">
  <router-view></router-view>
  <nav class="relative bottom-0 border-solid border-2 border-figblue flex justify-between pl-10 pr-10 pt-4 pb-4 bg-figwhite z-10">
      <img src="./assets/forum.png" alt="">
      <img src="./assets/community.png" alt="">
      <img src="./assets/chat.png" alt="">
      <img src="./assets/Vector.png" alt="">
      <img src="./assets/profil.png" alt="">
    </nav>
    <img src="../assets/decorange.png" alt="" class="absolute bottom-0 right-0 w-44">
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
}

nav{
  line-height: 1.5;
}
/* 
.logo {
  display: block;
  margin: 0 auto 25rem;
} */

/* @media (min-width: 1024px) {
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
} */
</style>

