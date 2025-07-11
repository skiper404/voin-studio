import { defineStore } from "pinia";
import { ref } from "vue";
import { submitUser } from "@/services/useService";

export const useMainStore = defineStore("MainStore", () => {
  const showMenu = ref(false);
  const activeTab = ref(null);
  const userName = ref("");
  const userContact = ref("");
  const message = ref("");

  const openMenu = () => {
    showMenu.value = true;
  };

  const closeMenu = () => {
    showMenu.value = false;
  };

  const setActiveTab = (tab) => {
    activeTab.value = tab;
  };

  const resetInfo = () => {
    userName.value = "";
    userContact.value = "";
  };

  const submit = async () => {
    if (!userName.value) {
      message.value = "Введите имя";
      return;
    }

    if (!userContact.value) {
      message.value = "Введите email или телефон";
      return;
    }
    message.value = "Заявка отправлена";

    resetInfo();

    setTimeout(() => {
      message.value = "";
    }, 1000);

    await submitUser({
      userName: userName.value,
      userContact: userContact.value,
    });
  };

  return {
    showMenu,
    openMenu,
    closeMenu,
    activeTab,
    setActiveTab,
    userName,
    userContact,
    submit,
    message,
  };
});
