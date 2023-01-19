<template>
  <div>
    <!-- <form> -->
      <div class="p-10 bg-gray-600 text-white">
        <h1 class="text-2xl">Bonjour {{this.$store.state.myProfile.firstname}}</h1>
      </div>

      <!-- <label>Nom :</label>
      <input type="text" v-model="form.name" />
      <br />
      <label>Prénom :</label>
      <input type="text" v-model="form.firstname" />
      <br /> -->
      <!-- <button href="">J'ai besoin d'aide en </button>
      <select v-model="form.difficulties">
        <option v-for="difficulty in difficulties" :key="difficulty">{{ difficulty }}</option>
      </select>
      <br />
      <button @click.prevent="submitForm">Soumettre</button> -->
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        firstname: "",
        difficulties: ""
      },
      difficulties: ["Axe Coding & digital innovation", "Axe Communication digitale & e-buisness", "Axe Animation 3D", "Axe Jeux Vidéo","Axe Création & design"]
    };
  },
  methods: {
    submitForm() {
      // Traitement des données du formulaire
      console.log(this.form);
    }
  }
};
</script>

<style>
  form{
    text-align: left;
  }
</style>
