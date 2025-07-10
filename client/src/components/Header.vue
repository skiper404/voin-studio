<script setup>
import { useMainStore } from "@/stores/MainStore";
import Logo from "./Logo.vue";
import MenuButton from "./MenuButton.vue";
import Navigation from "./Navigation.vue";
import FastConnect from "./FastConnect.vue";

const mainStore = useMainStore();
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-20 flex h-20 items-center justify-between gap-2 bg-gray-900 p-2 md:p-4"
  >
    <Logo />
    <Navigation />
    <div class="flex">
      <FastConnect />
      <MenuButton @click="mainStore.openMenu" />
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
