<script setup>
const props = defineProps({ href: String });
</script>

<template>
  <a
    :href="props.href"
    class="flex items-center gap-4"
    data-aos="fade-right"
    data-aos-duration="1000"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>
