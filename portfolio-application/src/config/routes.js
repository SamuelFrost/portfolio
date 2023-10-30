import { router } from '/src/components/routerLink.js'
export const setProjectRoutes = ()=>router.setRoutes([
  {
    name: "home",
    path: "/",
    component: "view-welcome-index",
    action: async () => {
      await import("/src/views/welcome/index.js");
    },
  },
  {
    name: "schedule",
    path: "/schedule",
    component: "view-schedule-index",
    action: async () => {
      await import("/src/views/schedule/index.js");
    },
  },
  {
    name: "resume",
    path: "/resume",
    component: "view-resume-index",
    action: async () => {
      await import("/src/views/resume/index.js");
    },
  },
  {
    name: "3d_models",
    path: "/3d_models",
    component: "view-model-index",
    action: async () => {
      await import("/src/views/projects/models/3d_models_index.js");
    },
  },
  {
    name: "about_portfolio",
    path: "/about_portfolio",
    component: "view-projects-portfolio-index",
    action: async () => {
      await import("/src/views/projects/portfolio/index.js");
    },
  },
  {
    path: "(.*)",
    component: "view-standard-error_404",
    action: async () => {
      await import("/src/views/standard/error_404.js");
    },
  },
]);