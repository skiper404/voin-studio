<script setup>
import IconStar from "./icons/IconStar.vue";
IconStar;
</script>

<template>
  <div
    id="services"
    class="relative flex flex-col items-center px-10 pt-20 text-white"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 flex items-end gap-2 text-2xl font-extralight text-yellow-500"
    >
      <IconStar />
      <div>Услуги</div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      class="z-10 mt-10 flex h-100 w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <div class="transition duration-300 hover:scale-150">Тут Блок услуг</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
