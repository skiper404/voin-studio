<script setup>
import IconChevron from "./icons/IconChevron.vue";
import IconSmile from "./icons/IconSmile.vue";
</script>

<template>
  <div
    id="/"
    class="relative flex h-[100dvh] flex-col items-center overflow-hidden pt-40 text-white"
  >
    <div
      data-aos="zoom-out"
      data-aos-duration="3000"
      class="flex flex-col items-center gap-10 text-5xl sm:text-6xl md:flex-row"
    >
      <div class="flex">
        <span>V</span>
        <IconSmile class="relative -top-2" />
        <span>I</span>
        <span>N</span>
      </div>
      <div class="flex">
        <span class="text-red-500">S</span>
        <span class="text-orange-500">t</span>
        <span class="text-yellow-500">u</span>
        <span class="text-green-500">d</span>
        <span class="text-blue-500">i</span>
        <span class="text-violet-500">o</span>
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      class="z-10 mt-10 text-center text-white"
    >
      Просто доверься мне...
    </div>
    <IconChevron class="absolute bottom-10" />
  </div>
</template>
