<script setup>
import IconTelegram from "./icons/IconTelegram.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import IconContacts from "./icons/IconContacts.vue";
</script>

<template>
  <div
    class="flex items-center gap-2 rounded-full p-2 text-xs transition duration-300 hover:bg-gray-600 md:bg-gray-700 md:px-4"
  >
    <div class="hidden animate-pulse lg:block">Написать</div>
    <div class="flex gap-4">
      <a href="https://t.me/KOLYA_VOIN" target="_blank">
        <IconTelegram />
      </a>
      <a href="https://www.instagram.com/kolya_voin3228/" target="_blank">
        <IconInstagram />
      </a>
      <a href="tel:+380951732724">
        <IconContacts />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
