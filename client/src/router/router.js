import { createRouter, createWebHistory } from "vue-router";
import ProjectOne from "@/components/ProjectOne.vue";
import ProjectTwo from "@/components/ProjectTwo.vue";
import ProjectThree from "@/components/ProjectThree.vue";
import Main from "@/components/Main.vue";

const routes = [
  { path: "/", component: Main, name: "Main" },
  { path: "/project1", component: ProjectOne, name: "Project1" },
  { path: "/project2", component: ProjectTwo, name: "Project2" },
  { path: "/project3", component: ProjectThree, name: "Project3" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

router.afterEach((to, from) => {
  const projectsRoutes = ["Project1", "Project2", "Project3"];
  const toMain = to.name === "Main";
  const isComingFromProjects = projectsRoutes.includes(from.name);
  if (isComingFromProjects && toMain) {
    setTimeout(() => {
      const target = document.getElementById("portfolio");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
});
