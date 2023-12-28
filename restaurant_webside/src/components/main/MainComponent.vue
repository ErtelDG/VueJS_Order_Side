<script setup>
import LeftMain from "../main/leftMain/LeftMain.vue";
import MainBasker from "../main/basker/MainBasker.vue";
import InfoBasket from "../main/basker/InfoBasket.vue";





</script>

<template>
   <main class="grid grid-cols-12">
      <!-- left side show menu -->
      <LeftMain></LeftMain>
      <!-- right side render main basker -->
      <MainBasker></MainBasker>
   </main>
   <!-- Show bottom top when a position in basket -->
   <InfoBasket></InfoBasket>
</template>

<style scoped></style>
