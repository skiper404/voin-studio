<script setup>
import { useMainStore } from "./stores/MainStore";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

const mainStore = useMainStore();
</script>

<template>
  <div
    class="font-press-start relative overflow-hidden scroll-smooth bg-gray-800 text-sm text-white"
    style="background-image: url(/background.svg)"
  >
    <Header />
    <Menu v-if="mainStore.showMenu" @click="mainStore.closeMenu" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
