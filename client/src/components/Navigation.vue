<script setup>
import NavItem from "./NavItem.vue";
</script>

<template>
  <nav
    class="hidden flex-1 items-center justify-center gap-8 whitespace-nowrap md:flex"
  >
    <NavItem content="Обо мне" tab="about" />
    <NavItem content="Услуги" tab="services" />
    <NavItem content="Портфолио" tab="portfolio" />
    <NavItem content="Акции" tab="specialOffers" />
    <NavItem content="Контакты" tab="contacts" />
  </nav>
</template>
