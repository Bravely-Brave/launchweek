<template lang="">
  <div class="p-10 bg-gray-600 text-white text-2xl">
    <h2>Ta recherche actuelle : <span v-for="need, key, index in this.$store.state.myProfile.needs" :key="need">{{ need }},</span></h2>

    <p class="pt-7 ">On te propose ces profils : </p>
    <div v-for="studentInfo in this.$store.state.matchingStudents" :key="studentInfo.firstname" class="py-8">
        <p>{{ this.$store.state.studentInfo.firstname + ' ' + this.$store.state.studentInfo.lastname }}</p>   
        <p>{{  }}</p>   
        <ul v-for="skill in studentInfo.skills" :key="skill">
          <li>{{ this.$store.state.studentInfo.skills }}</li>
        </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  
}
</script>

<style lang="">
  
</style>