<template>
      <img src="../assets/toggle.png" alt="" class="absolute z-10 right-10" @click="toHelpView()">
  <div class="body">
    <h1>Hello {{this.$store.state.user.firstname}}</h1>
    <div class="cartes">
      <div class="carte">
        <div class="cours">
          <div class="mtn">
            <p>Cours actuel</p>
          </div>
          <div class="class">
            <div class="camera">
              <h2>Gestion de projet AGILE</h2>
              <img src="../assets/zoom.png" alt="">
            </div>
            <h2>Salle de classe (412)</h2>
            <h3>Alexis BOUGY</h3><br/>
            <div class="presence">
              <p>08:00 - 12:30</p>
              <img src="../assets/presence.png" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="carte2">
        <div class="cours">
        <div class="mtn">
          <p>Prochain cours</p>
        </div>
        <div class="class">
          <div class="camera">
            <h2>VueJS</h2>
            <img src="../assets/zoom.png" alt="">
          </div>
          <h2>Salle de classe (401)</h2>
          <h3>Nicolas DE GUARRIGUES</h3><br/>
          <div class="presence">
            <p>08:00 - 12:30</p>
            <img src="../assets/presence.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>



  </div>
</template>

<script>
export default {
  // // data() {
  // //   return {
  // //     form: {
  // //       name: "",
  // //       firstname: "",
  // //       difficulties: ""
  // //     },
  // //     difficulties: ["Axe Coding & digital innovation", "Axe Communication digitale & e-buisness", "Axe Animation 3D", "Axe Jeux Vidéo","Axe Création & design"]
  //   };
  // },
  methods: {
    // submitForm() {
    //   // Traitement des données du formulaire
    //   console.log(this.form);
    // },
    toHelpView(){
      window.location.assign("http://localhost:5173/help")
    }

  }
};
</script>

<style>

.cartes{
  display:grid;
  height:100vh;
}
  body h1{
    font-size:44px;
    padding:20px;
    padding-bottom:50px;
  }
  .cours{
    border:black 1px solid;
    width:45%;
    border-radius:5px;
    height:10vh;
    margin:auto;
    text-align: left;
    position:relative;
  }
  .camera{
    display:flex;
    justify-content: space-between;
  }
  .class img{
    width:5%;
  }
  .presence{
    display:flex;
    justify-content: space-between;
  }
  .mtn p {
    padding:12px;
    padding-left:20px;
    opacity: 0.7;
  }
  .class{
    border:black solid 1px;
    height:25vh;
    border-radius:5px;
    background-color:white;
    text-align: left;
    padding:20px;
    line-height: 1.8em;
    width:101%;
    position:absolute;
    left:-2px;
    top:45px;
  }
  .class h2{
    font-weight:bold;
    text-transform: uppercase;
  }
</style>
