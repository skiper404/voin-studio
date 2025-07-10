<script setup>
import NavigationMobile from "./NavigationMobile.vue";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="fixed inset-0 z-20 scroll-m-56 bg-black/90">
    <div class="m-10">
      <NavigationMobile />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
