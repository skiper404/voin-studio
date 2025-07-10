<script setup>
import IconChevron from "./icons/IconChevron.vue";
import IconOffers from "./icons/IconOffers.vue";
</script>

<template>
  <div
    id="specialOffers"
    class="relative flex flex-col items-center p-10 pt-20 text-white"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 flex items-end text-2xl text-blue-500"
    >
      <IconOffers />
      <div>Акции</div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      class="z-10 mt-10 flex h-100 w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <span class="transition duration-300 hover:scale-150"> Тут акции </span>
    </div>
  </div>
</template>
