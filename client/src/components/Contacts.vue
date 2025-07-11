<script setup>
import IconInstagram from "./icons/IconInstagram.vue";
import IconTelegram from "./icons/IconTelegram.vue";
import IconViber from "./icons/IconViber.vue";
import IconContacts from "./icons/IconContacts.vue";
import SubmitForm from "./SubmitForm.vue";
import BaseContact from "./BaseContact.vue";
</script>

<template>
  <div
    id="contacts"
    class="relative flex flex-col items-center p-2 pt-20 text-white"
  >
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      class="z-10 flex gap-4 text-2xl text-violet-500"
    >
      <IconContacts />
      <div>Контакты</div>
    </div>
    <div class="z-10 mt-10 flex flex-col items-center gap-10 px-2 py-10">
      <BaseContact href="https://t.me/KOLYA_VOIN">
        <IconTelegram />
        @KOLYA_VOIN
      </BaseContact>
      <BaseContact href="https://www.instagram.com/kolya_voin3228/">
        <IconInstagram />
        kolya_voin3228
      </BaseContact>
      <BaseContact href="viber://chat?number=+380951732724">
        <IconViber />
        +380-95-173-2724
      </BaseContact>
      <BaseContact href="tel:+380951732724">
        <IconContacts />
        +380-95-173-2724
      </BaseContact>
      <SubmitForm />
    </div>
  </div>
</template>
