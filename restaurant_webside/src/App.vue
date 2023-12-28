<script setup>
//import { RouterLink, RouterView } from "vue-router";
import NavbarComponent from "./components/header/NavbarComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
</script>

<template>
   <header><NavbarComponent></NavbarComponent></header>
   <main><MainComponent></MainComponent></main>
   <footer><FooterComponent></FooterComponent></footer>
</template>

<style scoped></style>
