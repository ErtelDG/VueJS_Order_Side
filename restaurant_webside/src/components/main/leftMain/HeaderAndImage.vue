<script setup>
import burgerImage from "@/assets/img/burger.jpg";
import logo_burger_world from "@/assets/img/logo_burger-world.png";
</script>

<template>
   <header class="z-10 relative">
      <div class="h-48 bg-center bg-cover" :style="{ 'background-image': `url(${burgerImage})` }"></div>
      <div class="absolute left-1/2 h-1/3">
         <div class="flex justify-center items-center">
            <div class="flex justify-center bg-white rounded-full absolute bottom-4 h-24 w-24 sm:hidden">
               <img class="" :src="logo_burger_world" alt="" />
            </div>
         </div>
      </div>
   </header>
</template>
