<script setup>
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
</script>

<template>
  <nav
    class="hidden flex-1 items-center justify-center gap-8 whitespace-nowrap md:flex"
  >
    <a
      href="#about"
      class="transition duration-300 hover:scale-120 hover:cursor-pointer hover:text-red-500"
      :class="{ 'text-red-500': mainStore.activeTab === 'about' }"
      @click="mainStore.setActiveTab('about')"
    >
      Обо мне
    </a>
    <a
      href="#services"
      class="transition duration-300 hover:scale-120 hover:cursor-pointer hover:text-yellow-500"
      :class="{ 'text-yellow-500': mainStore.activeTab === 'services' }"
      @click="mainStore.setActiveTab('services')"
    >
      Услуги
    </a>
    <a
      href="#portfolio"
      class="transition duration-300 hover:scale-120 hover:cursor-pointer hover:text-green-500"
      :class="{ 'text-green-500': mainStore.activeTab === 'portfolio' }"
      @click="mainStore.setActiveTab('portfolio')"
    >
      Портфолио
    </a>
    <a
      href="#specialOffers"
      class="transition duration-300 hover:scale-120 hover:cursor-pointer hover:text-blue-500"
      :class="{ 'text-blue-500': mainStore.activeTab === 'specialOffers' }"
      @click="mainStore.setActiveTab('specialOffers')"
    >
      Акции
    </a>
    <a
      href="#contacts"
      class="transition duration-300 hover:scale-120 hover:cursor-pointer hover:text-violet-500"
      :class="{ 'text-violet-500': mainStore.activeTab === 'contacts' }"
      @click="mainStore.setActiveTab('contacts')"
    >
      Контакты
    </a>
  </nav>
</template>
