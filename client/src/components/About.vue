<script setup>
import IconUser from "./icons/IconUser.vue";
</script>

<template>
  <div
    id="about"
    class="relative flex flex-col items-center px-10 pt-20 text-white"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="font-press-start z-10 flex items-end text-2xl font-extralight text-red-500"
    >
      <IconUser />
      Oбо мне
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      class="z-10 mt-10 flex h-100 w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <span class="transition duration-300 hover:scale-150">
        Тут Блок информации о себе
      </span>
    </div>
  </div>
</template>
