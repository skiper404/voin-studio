import { defineStore } from "pinia";
import { ref } from "vue";
import { submitUser } from "@/services/useService";

export const useMainStore = defineStore("MainStore", () => {
  const showMenu = ref(false);
  const openMenu = () => (showMenu.value = true);
  const closeMenu = () => (showMenu.value = false);

  const activeTab = ref(null);

  const setActiveTab = (tab) => {
    activeTab.value = tab;
  };

  const userName = ref("");
  const userEmail = ref("");
  const userPhone = ref("");

  const isSubmit = ref(false);

  const submit = async () => {
    await submitUser({
      userName: userName.value,
      userEmail: userEmail.value,
      userPhone: userPhone.value,
    });

    userName.value = "";
    userEmail.value = "";
    userPhone.value = "";
    isSubmit.value = true;

    setTimeout(() => {
      isSubmit.value = false;
    }, 1000);
  };

  return {
    showMenu,
    openMenu,
    closeMenu,
    activeTab,
    setActiveTab,
    userName,
    userEmail,
    userPhone,
    submit,
    isSubmit,
  };
});
