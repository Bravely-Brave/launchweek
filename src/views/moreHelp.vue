<template class="grid">
  <div class="h-screen grid place-items-center">
    <div class="">
      <h1 class="text-left pb-12 text-2xl font-bold">En quoi voudrais-tu de l'aide ?</h1>
      <div class="">
        <ul class="flex flex-col gap-16">

          <div class="relative">
            <li class="bouton border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300" @click="mounted()">Axe Coding & digital innovation</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
            <div>
              <div class="flex justify-between pt-4 gap-2 masquer">
                <button class="border p-1 w-28 rounded-md shadow-xl">Front-end</button>
                <button class="border p-1 w-28 rounded-md shadow-xl">Back-end</button>
                <button class="border p-1 w-28 rounded-md shadow-xl">IOT</button>
              </div>
              <div class="flex justify-center pt-2 gap-10">
                <button class="border p-1 w-32 rounded-md shadow-xl">Prototype UX/UI</button>
                <button class="border p-1 w-32 rounded-md shadow-xl">DevOPS</button>
              </div>
            </div>
          </div>

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Communication digitale & e-buisness</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
          </div>

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Animation 3D</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
          </div>

          <div class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Jeux Vidéo</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
          </div>

          <div  class="relative">
            <li class="border p-3 w-96 rounded-md bg-figwhite hover:bg-figorange hover:cursor-pointer hover:font-bold ease-in duration-300">Axe Création & design</li>
            <div class="border p-6 w-full rounded-md absolute top-2 right-2 -z-10"></div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    let element = document.querySelectorAll(".masquer");
    let bouton = document.querySelectorAll(".bouton");

    bouton.addEventListener("click", function() {
        if (element.style.display === "none") {
            element.style.display = "block";
            bouton.innerHTML = "Masquer";
        } else {
            element.style.display = "none";
            bouton.innerHTML = "Afficher";
        }
    })
  }
}
</script>

<style>
  .detail{
    visibility: hidden;

  }
</style>
