<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
<template>
   <div v-if="store.state.basket.length === 0" id="renderbasket" class="">
      <div class="p-2 text-sm my-2">
         <div class="text-center py-4">
            <p class="flex justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
               </svg>
            </p>
            <p class="pb-2 font-semibold text-lg">Fülle deinen Warenkorb</p>
            <p class="text-xs">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
         </div>
      </div>
   </div>
   <div v-else>
      <!-- close "X" button when side is responsive and it was need -->
      <div
         id="closeButtonRightTop"
         class="fixed top-2 right-2 hover:bg-orange-400 hidden show-button-right-top-by-responsive cursor-pointer"
         onclick="closeBasket100vwvh()"
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>
      </div>

      <!-- menues where are in the basket -->
      <div class="p-2 text-sm my-2" v-for="(item, index) in store.state.basket" :key="index">
         <div class="grid grid-cols-8">
            <p class="font-bold col-span-1}">{{ item[1] }}</p>
            <p class="font-bold col-span-5">{{ item[0] }}</p>
            <p class="col-span-2 text-right font-semibold">{{ (item[1] * item[2]).toFixed(2) }} €</p>
         </div>
         <div class="pt-4 grid-cols-8 flex justify-end">
            <p class="cursor-pointer hover:bg-orange-400 border-2 border-black mr-1" @click="store.commit('decreaseQuantity', index)">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 26" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
               </svg>
            </p>
            <p class="cursor-pointer hover:bg-orange-400 border-2 border-black" @click="store.commit('increaseQuantity', index)">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 26" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
            </p>
         </div>
      </div>

      <div>
         <!-- Render Note how much is missing for free delivery -->
         <div v-if="store.state.subtotal < 40">
            <!-- Use your template or replace it with your logic -->
            <div class="text-base text-center bg-gray-200 p-2 my-2">
               <div class="">
                  <p class="text-sm">
                     Nur noch <b>{{ (40 - store.state.subtotal).toFixed(2) }} €</b><br />
                     bis zur kostenlosen Zustellung.
                  </p>
               </div>
            </div>
         </div>

         <!-- Render subtotal and grand total -->
         <div>
            <!-- Use your template or replace it with your logic -->
            <div class="text-base text-center p-2 my-2">
               <div class="flex justify-between">
                  <p>Zwischensumme</p>
                  <p>{{ store.state.subtotal.toFixed(2) }} €</p>
               </div>
               <div class="flex justify-between">
                  <p>Lieferkosten</p>
                  <p>{{ store.state.shippingCost.toFixed(2) }} €</p>
               </div>
               <div class="flex justify-between font-bold">
                  <p>Gesamt</p>
                  <p>{{ store.state.total.toFixed(2) }} €</p>
               </div>
            </div>
            <div>
               <button class="bg-gray-200 hover:bg-gray-300 w-full font-bold my-4 py-2 px-4" onclick="alert('Fake order triggered')">
                  Bezahlen ({{ store.state.total.toFixed(2) }} €)
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<!-- //-----render shipping costs and total---- function renderShippingCostsAndTotal(basket) { //render shipping costs and total let subtotal = 0; let shippingCost =
4.9; let total = 0; for (let i = 0; i < basketAmount.length; i++) { subtotal += basketPrice[i] * basketAmount[i]; } if (subtotal >= 40) { shippingCost = 0; }
total = subtotal + shippingCost; if (subtotal <= 40) { basket.innerHTML += HowMuchIsMissingForFreeDeliveryTemplate(subtotal); //render Note how much is missing
for free delivery } basket.innerHTML += renderSubtotalAndGrandTotalTemplate(subtotal, shippingCost, total); //render subtotal and grand total // show total in
basket by responsive side showTotalBasketByResponsive(subtotal, total); } -->

<!-- //render basket right side on the html => main function
function basket() {
    let basket = document.getElementById("renderbasket");
    //render when basket have menues
    if (basket != null) {
        basket.innerHTML = " ";
        basket.innerHTML = renderCloseXButtonByResponiseTemplate(); //close "X" button when side is responsive and it was need
        menusWhereAreInBasket(basket); //menues where are in the basket
        renderShippingCostsAndTotal(basket); //render shipping costs and total
    }
    //render when basket have no menues
    if (basketMenu.length <= 0) {
        if (basket != null) {
            basket.innerHTML = " ";
            basket.innerHTML += renderNoteShoppingBasketIsEmptyTemplate(); //render Note Shopping basket is empty
        }
        closeBasket100vwvh(); //auto close basket by responsive side
    }
    showBottomTopWhenAPositionInBasket();
} -->
