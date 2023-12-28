<script setup>
import { useStore } from "vuex";
const store = useStore();

const menuName = [
   ["CLASSIC", "Frisches Rindfleisch (150 g), Cheddar, Gurken-Relish, Tomaten, Eisbergsalat, Zwiebeln, BURGERISTA Sauce", 10.9],
   ["V.I.B. CHICKEN", "Frisch gegrilltes Chicken Filet (135 g), Cheddar, Eisbergsalat, Tomaten, Zwiebeln, Smokey Sauce, V.I.B. Sauce", 12.9],
   ["V.I.B. BEEF", "Frisches Rindfleisch (150 g), Cheddar, Eisbergsalat, Tomaten, Zwiebeln, Smokey Sauce, V.I.B. Sauce", 12.9],
   ["LORD BACON", "Frisches Rindfleisch (150 g), Cheddar, gegrillter Speck, Tomaten, Eisbergsalat, Zwiebeln, BURGERISTA Sauce", 13.9],
   ["BIG BBQ BANG", "Frisches Rindfleisch (150 g), Cheddar, gegrillter Speck, karamellisierte Zwiebeln, Eisbergsalat, Smokey Sauce", 14.9],
   ["MEISTERSTÜCK", "Frisches Rindfleisch (150 g), Emmentaler, gegrillter Speck, Champignons, karamellisierte Zwiebeln, Eisbergsalat, BURGERISTA Sauce", 15.9],
   ["Pommes Frites", "Knusprig lecker", 3.9],
   ["Country Potatoes", "Kräftig würzig", 4.4],
   ["Chicken Nuggets", "Leicht und lecker", 4.9],
   ["Miami", "Knackig-frischer Blattsalat mit frischen Tomaten, Gurken, Cole Slaw, Kartoffelsalat und Rettich", 6.9],
   ["Waikiki", "Gegrillte Putenstreifen, Orangenfilets, Tomaten und Gurken", 13.9],
   ["Alabama", "Panierte Champignons, Mais, Tomate, Gurken mit Knoblauch-Dip", 13.9],
   ["Florida", "Putenfilet in Kokos-Panade, Ananas, Banane, Walnüsse, Tomaten und Gurke", 13.9],
];
</script>

<template>
   <div class="w-10/12 flex justify-center md:w-full" v-for="(item, index) in menuName" :key="index">
      <div class="w-full border-x border-solid border">
         <div class="m-4 p-4 border-solid border-2 relative flex h-min sm:flex-col sm:items-center">
            <div class="w-8/12 sm:text-center sm:flex sm:flex-col sm:items-center sm:w-full">
               <p class="text-lg mb-4 font-bold" :id="'nameMenu' + index">{{ item[0] }}</p>
               <p class="mb-2">{{ item[1] }}</p>
            </div>
            <div class="w-4/12 flex justify-end items-end sm:justify-center sm:w-8/12">
               <p class="text-orange-400 text-xl font-bold sm:text-center" id="priceMenu${i}">{{ item[2].toFixed(2) }} €</p>
            </div>
            <div
               @click="store.dispatch('add', { menuId: index, menuPriceId: item[2], menuName })"
               class="absolute top-0 right-0 hover:bg-orange-100 cursor-pointer"
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
            </div>
         </div>
      </div>
   </div>
</template>
