<template lang="">
  <div class="relative"> 
    <div class="h-screen grid">
      <h1 class="text-5xl text-black m-auto">Bonjour {{this.$store.state.myProfile.firstname}}</h1>
      <div class="flex flex-col items-center gap-20">
        <button @click="newDoc()" class="border-none p-4 rounded-md w-3/6 bg-figorange text-figwhite font-bold" id="vue-app">J'ai besoin d'aide en ...</button>
        <button @click="discover()" class="border-none p-4 rounded-md w-3/6 bg-figorange text-figwhite font-bold">Je découvre</button>
      </div>
    </div>

    <nav class="relative bottom-0 border-solid border-2 border-figblue flex justify-between pl-10 pr-10 pt-4 pb-4 bg-figwhite z-10">
      <img src="../assets/forum.png" alt="">
      <img src="../assets/community.png" alt="">
      <img src="../assets/chat.png" alt="">
      <img src="../assets/Vector.png" alt="">
      <img src="../assets/profil.png" alt="">
    </nav>
    <img src="../assets/decorange.png" alt="" class="absolute bottom-0 right-0 w-44">

    <!-- <img src="../assets/decorose.png" alt="" class="absolute top-0"> -->
    <!-- <img src="../assets/decoviolet.png" alt=""> -->
    <!-- <img src="../assets/decorange.png" alt=""> -->
  </div>

    

</template>

<script>
export default {
  methods : {
    newDoc(){
      window.location.assign("http://localhost:5173/moreHelp")
    },
    discover(){
      window.location.assign("http://localhost:5173/forum")
    }
  }
}
</script>

<style lang="">
  
</style>