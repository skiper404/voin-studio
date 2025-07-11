<script setup>
import IconBack from "./icons/IconBack.vue";
</script>

<template>
  <div
    class="relative flex flex-col items-end justify-center bg-blue-500/50 pt-30 lg:flex-row"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <router-link
      :to="{ name: 'Main' }"
      class="absolute top-30 right-10 z-30 flex items-center gap-2 text-orange-500 hover:text-white"
    >
      <IconBack /> Назад
    </router-link>

    <div class="w-full p-10">
      <div class="text-2xl text-red-500">Проект 1</div>
      <div class="mt-2 text-[12px]">
        Описание проекта. Ту будет 3-5 предложения ебаных
      </div>
      <div class="mt-20 text-orange-500">О клиенте</div>
      <div class="mt-4 text-[12px]">
        Пару слов о заказчике. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Rem, debitis, corporis, maiores perspiciatis
        exercitationem cupiditate animi natus ab eveniet distinctio sunt rerum
        quibusdam ipsa. Quam corrupti porro nihil unde aperiam.
      </div>
      <div class="mt-20 text-orange-500">Концепция</div>
      <div class="mt-4 text-[12px]">
        Нарыганная хуйня на 3-5 предложения. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Dignissimos, assumenda? Voluptas doloribus
        minima eius nulla dignissimos et asperiores ut similique quibusdam,
        alias at quas sequi nemo harum in dicta tempora!
      </div>
      <div class="mt-20 text-orange-500">Backstage</div>
      <div class="mt-2 text-[12px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam
        repudiandae? Nostrum, doloribus vero! Magnam asperiores itaque, ratione
        <div class="flex flex-col justify-around gap-10 p-4 lg:flex-row">
          <img
            :src="`https://picsum.photos/seed/1/400/300`"
            alt="video_preview"
          />
          <img
            :src="`https://picsum.photos/seed/2/400/300`"
            alt="video_preview"
          />
          <img
            :src="`https://picsum.photos/seed/3/400/300`"
            alt="video_preview"
          />
        </div>
      </div>
      <div class="mt-20 text-orange-500">Результат</div>
      <div class="mt-2 text-[12px]">
        Ну конечно же описание результата. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cum, aperiam repudiandae? Nostrum.
      </div>
      <div class="mt-4 w-full p-1">
        <div class="relative" style="padding-top: 56.25%">
          <!-- 16:9 -->
          <iframe
            class="absolute top-0 left-0 h-full w-full outline-0"
            src="https://www.youtube.com/embed/w0iCX0ClwmQ?si=tsMRp3IaazhwvX7l&controls=1&autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
