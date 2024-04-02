import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ProjectsPage from "./Pages/ProjectsPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: App },
      { path: '/projects', component: ProjectsPage }
    ]
  })
  export default router;