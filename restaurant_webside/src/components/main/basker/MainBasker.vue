<script setup>
import BasketContent from "../basker/BasketContent.vue";
</script>
<template>
   <div class="col-span-2 p-2 bg-orange-200 h-full xl:hidden" id="right-main">
      <div class="sticky top-4 overflow-y-auto h-screen xl:mr-4">
         <p class="my-4 text-center text-2xl font-bold">Warenkorb</p>

         <!-- render basket content -->
         <BasketContent></BasketContent>
         
      </div>
   </div>
</template>
