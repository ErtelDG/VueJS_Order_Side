// store.js
import { createStore } from "vuex";

export default createStore({
   state() {
      return {
         basket: [],
         subtotal: 0,
         shippingCost: 4.9,
         total: 0,
      };
   },
   mutations: {
      addToBasket(state, addMenu) {
         state.basket.push(addMenu);
         this.commit("calcSubtotal");
      },

      increaseQuantity(state, index) {
         state.basket[index][1]++;
         this.commit("calcSubtotal");
      },

      decreaseQuantity(state, index) {
         state.basket[index][1]--;
         state.basket[index][1] == 0 && state.basket.splice(index, 1);
         this.commit("calcSubtotal");
      },

      removeFromBasket(state, index) {
         state.basket.splice(index, 1);
         this.commit("calcSubtotal");
      },

      calcSubtotal(state) {
         state.subtotal = 0; // Reset subtotal
         state.basket.forEach((item) => {
            state.subtotal += item[1] * item[2]; // Add the price of each item to the subtotal
         });
         state.total = state.subtotal + state.shippingCost;
      },
   },
   actions: {
      add({ commit, state }, { menuId, menuPriceId, menuName }) {
         const menuNameInArray = menuName[menuId][0];
         const menuPriceInArray = menuPriceId;

         // Check if the basket is empty
         if (state.basket.length === 0) {
            const addMenu = [menuNameInArray, 1, menuPriceInArray];
            commit("addToBasket", addMenu);
         } else {
            // Find the index of the menu in basketMenu
            const indexArray = state.basket.findIndex((menu) => menu[0] === menuNameInArray);

            // If the menu exists, increase the amount
            if (indexArray >= 0) {
               state.basket[indexArray][1]++;
               commit("calcSubtotal");
            } else {
               // If the menu doesn't exist, add it to the basketMenu
               commit("addToBasket", [menuNameInArray, 1, menuPriceInArray]);
            }
         }
      },
   },
});
