<script setup>
import { useMainStore } from "@/stores/MainStore";
const mainStore = useMainStore();
</script>

<template>
  <form
    @submit.prevent="mainStore.submit"
    class="flex w-[100%] flex-col gap-2 border border-violet-500 bg-gray-900 p-2 text-xs"
    data-aos="zoom-out"
    data-aos-duration="1000"
  >
    <div class="p-2 text-center">Оставляйте заявку. Обсудим ваш проект.</div>
    <div class="h-8 p-2 text-center text-orange-500 transition duration-300">
      {{ mainStore.message }}
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
      <label for="phone" class="text-center text-blue-500"
        >Контакт (email или телефон)</label
      >
      <input
        type="text"
        id="phone"
        class="w-full bg-gray-600 p-2 outline-0"
        placeholder="+380951234567"
        v-model="mainStore.userContact"
      />
    </div>
    <button
      type="submit"
      class="h-10 bg-gray-600 text-green-500 hover:bg-gray-500"
      :disabled="mainStore.isDisableButton"
    >
      Отправить
    </button>
  </form>
</template>
