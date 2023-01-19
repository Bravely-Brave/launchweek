<template lang="">
  <div class=""> 
    <div class="h-screen grid">
      <img src="../assets/switch.png" alt="" class="absolute z-10 right-10">
      <h1 class="text-5xl text-black m-auto">Bonjour {{this.$store.state.user.firstname}}</h1>
      <div class="flex flex-col items-center gap-20">
        <button @click="newDoc()" class="border-none p-4 rounded-md w-3/6 bg-figorange text-figwhite font-bold">J'ai besoin d'aide en ...</button>
        <button @click="discover()" class="border-none p-4 rounded-md w-3/6 bg-figorange text-figwhite font-bold">Je découvre</button>
      </div>
    </div>

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