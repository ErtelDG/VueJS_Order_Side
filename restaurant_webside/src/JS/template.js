// render Note how much is missing for free delivery
function HowMuchIsMissingForFreeDeliveryTemplate(subtotal) {
    return `
   <div class="text-base text-center bg-gray-200 p-2 my-2">
      <div class="">
         <p class="text-sm">Nur noch <b>${(40 - subtotal).toFixed(2)} €</b><br>
            bis zur kostenlosen Zustellung.
         </p>
      </div>
   </div>`;
}
// render subtotal and grand total
function renderSubtotalAndGrandTotalTemplate(subtotal, shippingCost, total) {
    return `
      <div class="text-base text-center p-2 my-2">
         <div class="flex justify-between">
            <p>Zwischensumme</p>
            <p>${subtotal.toFixed(2)} €</p>
         </div>
         <div class="flex justify-between">
            <p>Lieferkosten</p>
            <p>${shippingCost.toFixed(2)} €</p>
         </div>
         <div class="flex justify-between font-bold">
            <p>Gesamt</p>
            <p>${total.toFixed(2)} €</p>
         </div>
      </div>
      <div>
         <button class="bg-gray-200 hover:bg-gray-300 w-full font-bold my-4 py-2 px-4" onclick="alert('Fake order triggered')">
            Bezahlen (${total.toFixed(2)} €)
         </button>
      </div>
      `;
}
function renderNoteShoppingBasketIsEmptyTemplate() {
    return `
      <div class="p-2 text-sm">
         <div class="text-center border-2 py-4">
            <p class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
               </svg>
            </p>
            <p class="pb-2 font-semibold text-lg">Fülle deinen Warenkorb</p>
            <p class="text-xs">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein
               Essen.</p>
            </p>
         </div>
      </div>
      `;
}
