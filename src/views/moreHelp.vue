<template class="grid">
  <div class="h-screen grid place-items-center">
    <div class="">
      <img src="../assets/switch.png" alt="" class="absolute z-10 right-10" @click="toProfile()">
      <h1 class="text-left pb-12 text-2xl font-bold">En quoi voudrais-tu de l'aide ?</h1>
      <div class="">
        <ul class="flex flex-col gap-16">

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Coding & digital innovation</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
            <div v-if="show==='CDI'">
              <div class="flex justify-between pt-4 gap-2 ">
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Front-end</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Back-end</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">IOT</button>
              </div>
              <div class="flex justify-center pt-2 gap-10">
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Prototype UX/UI</button>
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">DevOPS</button>
              </div>
            </div>
          </div>

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Communication digitale & e-buisness</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
            <div v-if="show==='CDEB'">
              <div class="flex justify-between pt-4 gap-2 ">
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">SEO</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Gestion de projet</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Strat. de comm</button>
              </div>
              <div class="flex justify-center pt-2 gap-10">
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Vidéo marketing</button>
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Planning éditorial</button>
              </div>
            </div>
          </div>

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Animation 3D</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
            <div v-if="show==='3D'">
              <div class="flex justify-between pt-4 gap-2 ">
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Texturing</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Animation 2D</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Animation 3D</button>
              </div>
              <div class="flex justify-center pt-2 gap-10">
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Regging</button>
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Skinning</button>
              </div>
            </div>
          </div>

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Jeux Vidéo</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
            <div v-if="show==='JV'">
              <div class="flex justify-between pt-4 gap-2 ">
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">C++</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">C#</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Unreal</button>
              </div>
              <div class="flex justify-center pt-2 gap-10">
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Gestion de projet</button>
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Unity</button>
              </div>
            </div>
          </div>

          <div  class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Création & design</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
            <div v-if="show==='CD'">
              <div class="flex justify-between pt-4 gap-2 ">
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Photoshop</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Illustrator</button>
                <button class="border p-1 w-28 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Premiere PRO</button>
              </div>
              <div class="flex justify-center pt-2 gap-10">
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Figma XD</button>
                <button class="border p-1 w-32 rounded-md shadow-xl hover:bg-figpurple ease-in duration-300"><input type="checkbox">Prototype UI/UX</button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <button class="suivant" @click="toMain()">Suivant ></button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: "none",
    }
  },
  methods: {
    toMain(){
      window.location.assign("http://localhost:5173/main")
    },
    toProfile(){
      window.location.assign("http://localhost:5173/")
    }
  },
  mounted(){
    let showValues = ['CDI', 'CDEB', '3D', 'JV', 'CD']
    document.querySelectorAll('li').forEach((li, index) => {
      li.addEventListener('click', () => {
        this.show = showValues[index]
      })
    })
  }
}
</script>

<style>
  .suivant{
    color:rgb(238,127,1);
    font-weight:bold;
    font-size:20px;
  }

  .suivant:hover{
    font-size:24px;
    transition: 0.2s ease-in-out;
  }

</style>
