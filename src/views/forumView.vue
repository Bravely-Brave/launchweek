<template>
  <div class="body">
    <img src="../assets/switch.png" alt="" class="absolute z-10 right-10" @click="toProfile()">
    <div class="bar">
      <input type="text" class="searchbar" placeholder="rechercher">
      <img src="../assets/loupe.svg" alt="" class="loupe">
    </div>

    <section>
      <div>
        <div class="forum">
          <h2>Forum Q&A</h2>
        </div>
        <div class="post">
          <p>Dernier post :</p>
          <div class="article">
            <img src="../assets/post1.svg" alt="" class="florApp">
            <div class="exp">
              <h3>Lancement de l’appli FlorApp</h3>
              <p>Une appli révolutionnaire qui combine les connaissances de la flor et du virtuel.</p>
              <div class="app">
                <a href="#">Découvrir l'app</a>
                <img src="../assets/fleche.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="back"></div>
      </div>

      <div>
        <div class="forumiim">
          <h2>Forum évènements IIM </h2>
        </div>
        <div class="postiim">
          <p>Dernier post :</p>
          <div class="article">
            <img src="../assets/eventIIM.svg" alt="" class="eventIIM">
            <div class="exp expIIM">
              <h3>Présentations des DMB</h3>
              <p>Réservez vos places pour le vendredi 19 janvier à 13:30 pour assister aux présentations des projets des DMB !</p>
              <div class="app">
                <a href="#">Réserver ma place </a>
                <img src="../assets/fleche.svg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="back2"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods : {
    toProfile(){
      window.location.assign("http://localhost:5173/")
    }
  }
}
</script>
<style>

  section{
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
  }
  .bar{
    position:relative;
  }
  .loupe{
    position:absolute;
    width:20px;
    top:5px;
    right:33%;
  }
  .searchbar{
    border:rgb(217,217,217) 1px solid;
    width:35%;
    border-radius:20px;
    padding-left:20px;
    padding-top:5px;
    padding-bottom:5px;
    margin-bottom:5%;
  }

  /*styles généraux*/
  .article{
    display:flex;
    align-items: center;
    gap:20px;
    text-align: left;
  }

  section h2{
    padding-top:5px;
    padding-left:30px;
    text-align:left;
    font-weight:bold;
    font-size:20px;
    color:white;
  }
  section p{
    text-align:left;
    padding-bottom:10px;
  }

  section .exp h3{
    font-weight:bold;
    padding-bottom:10px;
  }

  section .app{
    display:flex;
    align-items: center;
    gap:20px;
  }

  section .app a {
    font-size:12px;
    text-decoration: none;
  }

  section .app a:hover{
    text-decoration: underline;
    font-weight: 500;
    transition:0.4s ease;
  }

  /*Carte 1*/
  .back{
    border:black 1px solid;
    height:21vh;
    width:35%;
    margin:auto;
    border-radius:20px;
    position:relative;
  }

  .forum{
    background-color:rgb(238,127,1);
    height:25vh;
    width:35%;
    margin:auto;
    border-radius:20px;
    position:absolute;
    z-index:1;
    top:27%;
    right:32%;
  }

  .post{
    border:rgb(238,127,1) 1px solid;
    background-color: white;
    height:21vh;
    width:35%;
    z-index:2;
    margin:auto;
    top:31%;
    right:32%;
    border-radius:20px;
    position:absolute;
    padding-left:30px;
    padding-top:15px;
  }

  /*carte 2*/
  .back2{
    border:black 1px solid;
    height:21vh;
    width:35%;
    margin:auto;
    border-radius:20px;
    position:relative;
    bottom:47%;
    right:1%;
    z-index:-1;
  }

  .forumiim {
    background-color:rgb(238,127,1);
    height:25vh;
    width:35%;
    margin:auto;
    position:relative;
    border-radius:20px;
    bottom:5%;
    left:-1px;
  }
  .postiim{
    border:rgb(238,127,1) 1px solid;
    background-color: white;
    height:22vh;
    width:35%;
    z-index:2;
    margin:auto;
    border-radius:20px;
    padding-left:30px;
    padding-top:15px;
    position:absolute;
    left:435px;
    bottom:6%;
  }
  .florApp, .eventIIM{
    width:30%;
    border-radius:50%;
  }

</style>