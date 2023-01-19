<template lang="">
  <div class="p-10 bg-gray-600 text-white text-2xl h-screen grid">
    <h2 class="font-bold">Ta recherche actuelle : <span v-for="need, key, index in this.$store.state.user.needs" :key="need"> {{ need }},</span></h2>

    <p class="pt-7 ">On te propose ces profils : </p>
    <div v-for="studentInfo in this.$store.state.studentInfo" :key="studentInfo.firstname" class="py-8">
      <div v-if="studentInfo.skills.some(skill => this.$store.state.user.needs.includes(skill))" class="border relative w-1/2 m-auto rounded-lg flex justify-center items-center gap-10 p-6 bg-figwhite">
        <div class="border p-16 w-full rounded-md absolute -bottom-2 right-2 -z-10 bg-figblue"></div>
        <img src="../assets/student1.png" alt="" class="w-20">
        <div class="flex items-center gap-20 ">
          <div class="text-left ">
            <p class="font-bold text-figorange">{{ studentInfo.firstname + ' ' + studentInfo.lastname }}</p>
            <p class="text-lg">{{studentInfo.class}}</p>
          </div>
          <p>{{  }}</p>   
          <div class="flex flex-col">
            <ul v-for="skill in studentInfo.skills" :key="skill" class="flex flex-col text-sm">
              <li>{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  
}
</script>

<style lang="">
  
</style>