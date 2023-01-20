<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <body>
    <!-- 1ere page -->
    <!-- <section>
      <div class="px-30 pb-20 pt-20">
        <div class="w-80 h-80 border-2 border-black"></div>
        <img class="relative" src="./assets/main-logo.png" alt="" />
      </div>

      <div class="w-20 h-10 bg-white">
        <p class="texte-[#EE7F01]">BIG UPDATE</p>
      </div>
      

      <div class="w-45 flex space-x-20 justify-end mx-20 ">
        <img src="./assets/logo-devinci.png" alt="" />
        <img src="./assets/launch-logo.png" alt="" />
      </div>

     
 


</section> -->

    <!-- nav -->

    <section class="bg-orange-IMM w-full h-full">
      <div class="flex pt-10 pb-10 ml-20">
        <img class="rounded-lg w-20" src="./assets/main-logo.png" alt="" />
      </div>
      <!-- section2 -->
      <section class="flex justify-between">
        <div class="mt-20 ml-10 rounded-lg pt-5 pb-5 pr-5 pl-5">
          <div class="flex justify-center w-4/6"></div>
          <div class="flex items-center relative decouverte">
            <p class="text-white font-bold pb-6">
              Découvrez les nouveautés
              
            </p>
            
          </div>
          <div>
            <p class="text-white font-bold pb-6 decou">L’app MyDevinci !</p>
          </div>
          <div class="flex justify-center relative qr">
            <img
              class="flex justify-center w-40 pb-5"
              src="./assets/qr.png"
              alt=""
            />
          </div>
          <div class="flex justify-center">
            <div class="bg-black rounded-lg w-fit pt-1 pb-1 pr-5 pl-5 mt-5 relative go">
              <p class="text-white">Go Découvrir !</p>
            </div>
          </div>
        </div>

        <div class="w-325mt-20 mr-10 pb-20">
          <img class="" src="./assets/mochup 3 1.png" alt="" />
        </div>
      </section>
    </section>

    <!-- section 3 -->
    <div class="mt-10 ml-20">
      <p class="text-black font-bold">
        L’IMPLÉMENTATION DU MODE <span class="text-orange-IMM">SWITCH !</span>
      </p>
    </div>

    <section class="flex justify-center mt-10 mr-40 ml-40 bg-orange-IMM">
      <div class="pt-10 pb-10 pr-10 pl-10 flex MAIN">
        <p class="text-white font-semibold pb-10">
          Le mode “switch” de MyDevinci vous permettra d’avoir : Un cercle plus
          étendue au sein de l’IIM que ce soit Inter-axe ou inter année avec des
          groupes chat générés de manière random. + d’aide aux devoirs pour les
          étudiants en difficultés ou pour avoir des conseils dans n’importe
          quel axe. Un forum pour poster vos projects, poser vos question ou
          répondre à des questions
        </p>

        <img class="w-50" src="./assets/mockup1 2.png" alt="" />
      </div>
    </section>

    <!-- section 4 -->

    <div class="mt-10 ml-20">
      <p class="text-black font-bold">Meilleurs moyens de communication:</p>
    </div>

    <div class="mt-10 ml-20 flex justify-between">
      <p class="text-black font-bold">Inter-axe ></p>

      <p class="text-black font-bold annee">Inter-année ></p>
    </div>

    <section class="flex">
      <div class="bg-grey-IIM flex mr-20 ml-20 mt-10">
        <div class="relative z-5">
          <div
            class="border-2 border-black absolute top-20 left-20 z-2 square"
          ></div>

          <div
            class="bg-orange-IMM cube1 rounded-lg mr-20 mt-10 ml-10 mb-10 z-5 absolute flex justify-center"
          >
            <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">Coding</p>
          </div>
        </div>
      </div>

      <div class="relative z-5">
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 square2"
        ></div>
        <div
          class="cube-3d bg-orange-IMM rounded-lg mt-10 ml-20 mb-10 mr-20 z-5 absolute flex justify-center pr-3 pl-3"
        >
          <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">
            Animation 3D
          </p>
        </div>

        <div class="relative z-5">
          <div
            class="border-2 border-black absolute top-20 left-20 z-2 square3"
          ></div>
          <div
            class="bg-orange-IMM cube-2d rounded-lg mt-10 ml-20 mb-10 mr-20 w-20 z-5 absolute flex justify-center"
          >
            <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">
              Jeux Vidéo
            </p>
          </div>
        </div>

        <div class="relative z-5">
          <div
            class="border-2 border-black absolute top-20 left-20 z-2 square4"
          ></div>
          <div
            class="bg-orange-IMM cube-1d rounded-lg mt-10 ml-20 mb-10 mr-20 w-20 z-5 absolute flex justify-center"
          >
            <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">
              Com./e-buisness
            </p>
          </div>
        </div>

        <div class="relative z-5 top-10">
          <div
            class="border-2 border-black absolute top-20 left-20 z-2 square5"
          ></div>
          <div
            class="bg-orange-IMM rounded-lg mt-10 ml-20 mb-10 mr-20 w-20 z-5 absolute cube0"
          >
            <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">
              Créa./Design
            </p>
          </div>
        </div>
      </div>

      <div class="relative z-5">
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 circle"
        ></div>

        <div
          class="circle1 bg-orange-IMM rounded-lg mr-20 mt-10 ml-10 mb-10 z-5 absolute flex justify-center"
        >
          <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">A1</p>
        </div>
      </div>

      <div class="relative z-5">
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 circlee"
        ></div>

        <div
          class="circle2 bg-orange-IMM rounded-lg mr-20 mt-10 ml-10 mb-10 z-5 absolute flex justify-center"
        >
          <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">A2</p>
        </div>
      </div>

      <div class="relative z-5">
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 circleee"
        ></div>

        <div
          class="circle3 bg-orange-IMM rounded-lg mr-20 mt-10 ml-10 mb-10 z-5 absolute flex justify-center"
        >
          <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">A3</p>
        </div>
      </div>

      <div class="relative z-5">
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 circleeee"
        ></div>

        <div
          class="circle4 bg-orange-IMM rounded-lg mr-20 mt-10 ml-10 mb-10 z-5 absolute flex justify-center"
        >
          <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">A4</p>
        </div>
      </div>

      <div class="relative z-5">
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 circleeeee"
        ></div>

        <div
          class="circle5 bg-orange-IMM rounded-lg mr-20 mt-10 ml-10 mb-10 z-5 absolute flex justify-center"
        >
          <p class="text-white font-semibold pb-5 pt-5 pr-5 pl-5">A5</p>
        </div>
      </div>
    </section>

    <!-- section4 -->

    <div>
      <p class="text-black font-bold OPS">
        L'option de chat privé est là pour que vous puissier chatter avec des
        personnes en particulier
      </p>
    </div>

    <div class="bg-grey-IIM rounded chat">
      <div>
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 purple"
        ></div>

        <div class="bg-purple-IIM rounded absolute pt-2 pb-2 pr-2 pl-2 purple1">
          <p class="hour">15:06</p>
          <p>Salut Éloïse! Comment je peux t’aider?</p>
        </div>
        <!-- <p class="lu">Lu à 15:07</p> -->
      </div>
      <div class="ellipse relative">
        <img src="./assets/Ellipse 11.png" alt="" />
      </div>
      <div class="ellipse2 relative">
        <img src="./assets/boy-avatar.png" alt="" />
      </div>
      <div>
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 purplee"
        ></div>

        <div class="bg-orange-IMM rounded absolute pt-2 pb-2 pr-2 pl-2 purple2">
          <p class="hour">15:07</p>
          <p>Coucou Léo! J’aurai besoin d’aide pour un devoir avec Blender.</p>
        </div>
        <!-- <p class="lu2">Lu à 15:07</p> -->
      </div>

      <div>
        <div
          class="border-2 border-black absolute top-20 left-20 z-2 purpleee"
        ></div>

        <div class="bg-purple-IIM rounded absolute pt-2 pb-2 pr-2 pl-2 purple3">
          <p class="hour">15:08</p>
          <p>
            Tu pourrai me dire où tu en es et qu’est ce qui te poses le plus de
            problème dans ton devoir?
          </p>
        </div>
        <!-- <p class="lu">Lu à 15:07</p> -->
      </div>
    </div>

    <div class="mt-12 ml-20">
      <p class="text-black font-bold">
        Entraide en petits groupes pour projets
      </p>
    </div>

    <div class="relative forum">
      <p class="text-black font-bold">Forum</p>
    </div>

    <div class="bg-grey-IIM rounded group">
      <div class="absolute">
        <img class="image" src="./assets/blue.png " alt="" />
      </div>

      <div class="absolute gang">
        <p class="font-bold">
          El Kasos gang
          <span class="font-light text-xs">crée le 18/01/2023</span>
        </p>
        <p class="text-xs"></p>
        <p>8 membres</p>
      </div>

      <div class="bg-purple-IIM absolute rounded pt-2 pl-2 pr-2 hello">
        <p class="font-bold">Yo @everyone !</p>
      </div>

      <div class="bg-purple-IIM absolute rounded pt-2 pl-2 pr-2 helloo">
        <p class="">
          Vous avez des petites updates sur le projet? Je viens de finir ma
          partie, est ce que quelqu’un de la team JV a besoin d’aide?
        </p>
      </div>

      <div>
        <div class="bg-purple-IIM absolute rounded pt-2 pl-2 pr-2 hellooo">
          <p class="">
            J’ai presque fini! Il faut juste que je fasse quelque modifs pour
            que tout sois niquel
          </p>
        </div>

        <div class="relative fatou">
          <img src="./assets/fatou.png" alt="">
        </div>

        <div class="relative andre">
          <img src="./assets/andre.png" alt="">
        </div>

        <div class="relative red-boy">
          <img src="./assets/red-boy.png" alt="">
        </div>

        <div class="bg-orange-IMM absolute rounded pt-2 pl-2 pr-2 helloooo">
          <p class="">Perso tout roule pour l’instant!</p>
        </div>
      </div>
    </div>

    <div class="bg-grey-IIM rounded groupp absolute">
      <div class="bg-purple-IIM absolute rounded pt-2 pl-2 pr-2 member">
        <p class="">
          Bonjour à tous! Je vous partage un projet qu’on a fait avec le groupe
          @copsy. Une appli qui traite sur des modèles informatiques de plantes,
          utilisés pour décrire la formation, la croissance, leurs
          développement, comment ils influencent et sont influencés par leur
          environnement.
        </p>

        <p class="pt-5">Pour les curieux voir: FlorApp</p>
        <p class="pt-5">Les participants :</p>
      </div>

      

      <div class="bg-orange-IMM pt-3 pb-8 pl-3 rounded part">
        <p class="text-white absolute">Sympathique votre application!</p>
      </div>

      
    </div>

    <div class="photo1 absolute flex space-x-5">
      <img src="./assets/1.png" alt="" />
      <img src="./assets/2.png" alt="" />
      <img src="./assets/3.png" alt="" />
      <img src="./assets/4.png" alt="" />
    </div>

    <div class="demo">
      <a href=""
        ><p class="text-orange-IMM font-bold pb-20"><u>TESTER DEMO</u></p></a
      >
    </div>

    <footer class="bg-orange-IMM">
      <div class="flex col-span-1 ml-20 mt-7">
        <p class="text-white font-bold mt-5 ">
          Instiitut de l’Internet et du Multimédia 
        </p>

        <p class="text-white school" >IIM Digital School • Paris &
          Nantes 47 boulevard de Pesaro 92000 Nanterre 9 rue Alfred Kastler
          44300 Nantes</p>
      </div>

      <div class="flex space-x-7 text-white bas font-semibold">
        <a href=""><p>Plan d’accès</p></a>
        <a href=""><p>Blog</p></a>
        <a href=""><p>Contact</p></a>
      </div>

      <div class="flex space-x-7 text-white bas font-semibold lien">
        <a href=""><p>© 2017 IIM - Institut de l’Internet et du Multimédia de puis 1995
          l’école des métiers de l’internet, du numérique et multimédia</p></a>

          <a href=""><p>Mentions</p></a>
      </div>

      <div class="flex space-x-9 logoss relative">
        <img src="./assets/blue-logo.png" alt="">
        <img src="./assets/white-logo.png" alt="">
        <img src="./assets/red-logo.png" alt="">
        <img src="./assets/black-logo.png" alt="">
      </div>

   
    </footer>
  </body>
</template>

<style scoped>
@media (min-width: 1024px) {
  .texte {
    color: white;
  }

  

  .bas{
    margin-top: 30px;
    margin-left:75px;
    font-size: 14px;
  }

  .fatou{
    margin-left: 20px;
    top: 199px;
  }

  .andre{
    margin-left: 20px;
    top: 250px;
  }

  .red-boy{
    margin-left: 500px;
    top: 380px;
  }



.logoss{
  width: 65px;
  margin-left: 999px;
  top: -150px;

}

.decouverte{
  margin-left: 150px;

}

.qr{
  margin-left: 160px;
}

.go{
  margin-left: 160px;
}

.decou{
  margin-left: 180px;
}

  .lien{
    font-size: 9px;
  }

  .demo {
    display: flex;
    justify-content: center;
    margin-top: 170px;
  }

  .part {
    width: 300px;
    margin-top: 400px;
    margin-left: 250px;
  }

  .school{
    width: 220px;
    margin-top: 40px;
    margin-left: -290px;
    padding-top: 20px;
    font-size: 11px;
  }

  .annee {
    margin-right: 560px;
  }

  .MAIN {
    width: 10000px;
  }

  .photo1 {
    margin-left: 950px;
    margin-top: 3090px;
    top: 20px;
  }

  .member {
    width: 500px;
    height: 270px;
    margin-top: 110px;
    margin-left: 50px;
  }

  .hello {
    margin-left: 90px;
    margin-top: 90px;
  }

  .helloo {
    width: 300px;

    margin-left: 90px;
    margin-top: 130px;
  }

  .hellooo {
    width: 300px;
    margin-left: 90px;
    margin-top: 250px;
  }

  .helloooo {
    width: 300px;
    margin-left: 150px;
    margin-top: 350px;
  }

  .group {
    width: 550px;
    height: 500px;
    margin-left: 70px;
    border-radius: 10px;
  }

  .groupp {
    width: 600px;
    height: 500px;
    margin-left: 880px;
    border-radius: 10px;
    top: 2775px;
  }
  .gang {
    margin-top: 20px;
    margin-left: 90px;
  }

  .image {
    margin-left: 30px;
    margin-top: 25px;
    top: 20px;
  }

  .forum {
    margin-top: 0px;
    top: -25px;
    margin-left: 900px;
  }

  .cube1 {
    width: 120px;
    height: 80px;
    top: -10px;
    left: -32px;
  }
  .square {
    border-radius: 5px;
    width: 120px;
    height: 80px;
    left: 3px;
    top: 35px;
  }

  .square2 {
    border-radius: 5px;
    width: 120px;
    height: 80px;
    left: 75px;
    top: 75px;
  }

  .square3 {
    border-radius: 5px;
    width: 120px;
    height: 80px;
    left: 225px;
    top: 75px;
  }

  .square4 {
    border-radius: 5px;
    width: 120px;
    height: 80px;
    left: -7px;
    top: 20px;
    margin-top: 200px;
  }

  .cube-3d {
    width: 120px;
    height: 80px;
    top: 30px;
  }

  .cube-2d {
    width: 120px;
    height: 80px;

    top: 30px;
    left: 150px;
  }

  .cube-1d {
    width: 120px;
    height: 80px;

    top: 15px;
    left: -80px;
    margin-top: 200px;
  }

  .cube0 {
    width: 120px;
    height: 80px;

    top: -25px;
    left: 70px;
    margin-top: 200px;
  }

  .square5 {
    border-radius: 5px;
    width: 120px;
    height: 80px;
    left: 145px;
    top: -25px;
    margin-top: 205px;
  }

  .circle1 {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 650px;
    top: 23px;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 684px;
    top: 64px;
  }

  .circle2 {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 800px;
    top: 23px;
  }

  .circlee {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 833px;
    top: 64px;
  }

  .circle3 {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 950px;
    top: 23px;
  }

  .circleee {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 983px;
    top: 64px;
  }

  .circle4 {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 720px;
    top: 23px;
    margin-top: 183px;
  }

  .circleeee {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 753px;
    top: 23px;
    margin-top: 183px;
  }

  .circle5 {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 880px;
    top: 23px;
    margin-top: 183px;
  }

  .circleeeee {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 913px;
    top: 23px;
    margin-top: 183px;
  }

  .OPS {
    display: flex;
    justify-content: center;
    margin-top: 420px;
  }

  .chat {
    margin-top: 25px;
    margin-left: 300px;
    width: 900px;
    height: 450px;
    border-radius: 20px;
  }

  .hour {
    font-size: 12px;
    margin-left: 250px;
  }

  .purple1 {
    margin-top: 30px;
    margin-left: 85px;
  }

  .purple {
    width: 290px;
    height: 70px;
    margin-top: 2174px;
    margin-left: 290px;
    border-radius: 10px;
    top: 90px;
  }

  .purplee {
    width: 295px;
    height: 70px;
    margin-top: 2280px;
    margin-left: 720px;
    border-radius: 10px;
    top: 100px;
  }

  .purple2 {
    padding: 2px;
    width: 290px;
    height: 70px;
    margin-top: 2280px;
    margin-left: 480px;
    border-radius: 10px;
    top: 90px;
  }

  .purpleee {
    padding: 2px;
    width: 295px;
    height: 100px;
    margin-top: 2430px;
    margin-left: 285px;
    border-radius: 10px;
    top: 70px;
  }

  .purple3 {
    padding: 2px;
    width: 295px;
    height: 100px;
    margin-top: 2400px;
    margin-left: 80px;
    border-radius: 10px;
    top: 90px;
  }

  .ellipse {
    margin-left: 800px;

    top: 150px;
  }

  .ellipse2 {
    margin-left: 15px;

    top: 340px;
  }

  .lu {
    font-size: 12px;
    padding-top: 30px;
  }
}
</style>
