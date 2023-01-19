<template>
  <div class="body">
    <img src="../assets/switch.png" alt="" class="absolute z-10 right-10">
    <div class="bar">
      <input type="text" class="searchbar" placeholder="rechercher">
      <img src="../assets/loupe.svg" alt="" class="loupe">
    </div>

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
  </div>
</template>

<script>
export default {
  
}
</script>
<style>

  .body{
    height:100vh;
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
  .back{
    border:black 1px solid;
    height:25vh;
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
    top:23%;
    right:31%;
  }
  .forum h2{
    padding-top:10px;
    padding-left:30px;
    text-align:left;
    font-weight:bold;
    font-size:20px;
    color:white;
  }
  .post{
    border:rgb(238,127,1) 1px solid;
    background-color: white;
    height:20vh;
    width:35%;
    z-index:2;
    margin:auto;
    top:28%;
    right:31%;
    border-radius:20px;
    position:absolute;
    padding-left:30px;
    padding-top:15px;
  }
  .post p{
    text-align:left;
    padding-bottom:10px;
  }
  .florApp{
    width:30%;
    border-radius:50%;
  }

  .article{
    display:flex;
    align-items: center;
    gap:20px;
    text-align: left;
  }

  .exp h3{
    font-weight:bold;
    padding-bottom:10px;
  }

  .app{
    display:flex;
    align-items: center;
    gap:20px;
  }

  .app a {
    font-size:12px;
    text-decoration: none;
  }

  .app a:hover{
    text-decoration: underline;
    font-weight: 500;
    transition:0.4s ease;
  }
</style>