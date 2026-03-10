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
      class="z-10 mt-10 flex w-full items-center justify-center border border-violet-500 bg-black/80 p-10 text-xl"
    >
      <span class="transition duration-300">
        <div class="p-2 text-green-700">
          Меня зовут Николай, и да, вы правильно чувствуете — я не просто
          человек, я явление. Где другие видят потолок, я вижу черновик своих
          идей. Гордыня? Возможно. Комплекс бога? Уже переработан в
          стратегическое преимущество. Мои мысли бегают быстрее интернета, а
          аргументы — бронированные.
        </div>
        <div class="p-2 text-blue-400">
          Я не ищу простые решения — я создаю идеальные. Кофе для меня — не
          напиток, а ритуал запуска вселенной. Меня уважают даже ошибки — они
          боятся повторяться. Гений — не профессия, а побочный эффект моего
          существования. Моя жизнь — это проект, где баги исправляются
          мгновенно, а апдейты случаются ежедневно.
        </div>
        <div class="p-2 text-violet-600">
          Так что, если вы искали того самого — поздравляю, нашли.
        </div>
      </span>
    </div>
  </div>
</template>
