<script setup>
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore();
const props = defineProps({ content: String, tab: String });

const handleClick = () => {
  mainStore.setActiveTab(props.tab);

  const target = document.getElementById(props.tab);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <a
    class="transition duration-300 hover:scale-120 hover:cursor-pointer hover:text-red-500"
    :class="{ 'text-blue-500': mainStore.activeTab === props.tab }"
    @click="handleClick"
  >
    {{ props.content }}
  </a>
</template>
