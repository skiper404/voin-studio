<script setup>
import { useMainStore } from "@/stores/MainStore";
const mainStore = useMainStore();
</script>

<template>
  <div
    class="flex w-[100%] flex-col gap-4 border border-violet-500 bg-gray-900 p-2 text-lg"
    data-aos="zoom-out"
    data-aos-duration="1000"
  >
    <div class="p-2 text-center">Оставляйте заявку. Обсудим ваш проект.</div>
    <div
      v-if="mainStore.isSubmit"
      class="p-2 text-center text-orange-500 transition duration-300"
    >
      Заявка отправлена
    </div>
    <div class="flex flex-col items-center justify-between gap-2">
      <label for="name" class="text-blue-500">Имя</label>
      <input
        type="text"
        id="name"
        class="w-full bg-gray-600 p-2 outline-0"
        placeholder="Игорь"
        v-model="mainStore.userName"
      />
    </div>
    <div class="flex flex-col items-center justify-between gap-2">
      <label for="email" class="text-blue-500">Почта</label>
      <input
        type="text"
        id="email"
        class="w-full bg-gray-600 p-2 outline-0"
        placeholder="igorek@mail.com"
        v-model="mainStore.userEmail"
      />
    </div>
    <div class="flex flex-col items-center justify-between gap-2">
      <label for="phone" class="text-blue-500">Телефон</label>
      <input
        type="text"
        id="phone"
        class="w-full bg-gray-600 p-2 outline-0"
        placeholder="+380951234567"
        v-model="mainStore.userPhone"
      />
    </div>
    <button
      class="h-10 bg-gray-600 text-green-500 hover:bg-gray-500"
      @click="mainStore.submit"
    >
      Отправить
    </button>
  </div>
</template>
