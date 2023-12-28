<script setup>
import Address from "../leftMain/Address.vue";
import HeaderAndImage from "../leftMain/HeaderAndImage.vue";
import LeftSideRenderMainMenu from "../leftMain/LeftSideRenderMainMenu.vue";
import LinkMenus from "../leftMain/LinkMenus.vue";
</script>

<template>
   <div id="left-main" class="col-span-10 xl:col-span-12">
      <!-- header and img -->
      <HeaderAndImage></HeaderAndImage>

      <div class="flex flex-col items-center border-x border-solid border-4">
         <!-- address -->
         <Address></Address>
         <!-- link menus -->
         <LinkMenus></LinkMenus>
         <!-- left side render main menu -->
         <LeftSideRenderMainMenu></LeftSideRenderMainMenu>
      </div>
   </div>
</template>
