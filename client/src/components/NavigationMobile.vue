<script setup>
import { useMainStore } from "@/stores/MainStore";
import IconClose from "./icons/IconClose.vue";

const mainStore = useMainStore();
</script>

<template>
  <nav
    class="flex flex-1 flex-col justify-center gap-4 pt-10 text-xl whitespace-nowrap"
  >
    <IconClose class="absolute top-4 right-4" @click="mainStore.closeMenu" />

    <a href="#about" class="text-red-500"> Обо мне </a>
    <a href="#services" class="text-yellow-500"> Услуги </a>
    <a href="#portfolio" class="text-green-500"> Портфолио </a>
    <a href="#specialOffers" class="text-blue-500"> Акции </a>
    <a href="#contacts" class="text-violet-500"> Контакты </a>
  </nav>
</template>
