// const routes = [
//   {
//     path: "/",
//     redirect: {
//       name: "my-dashboard",
//     },
//     component: () => import("layouts/MainLayout.vue"),
//     children: [
//       {
//         path: "my-dashboard",
//         name: "my-dashboard",
//         component: () => import("pages/DashboardPage.vue"),
//       },
//       {
//         path: "my-card",
//         name: "my-card",
//         component: () => import("pages/FrontendExercise/CardDash.vue"),
//       },
//       {
//         path: "myactlog",
//         name: "myactlog",
//         component: () => import("pages/FrontendExercise/ActivityLogs.vue"),
//       },
//       {
//         path: "myprofdet",
//         name: "myprofdet",
//         component: () => import("pages/FrontendExercise/ProfileDetails.vue"),
//       },
//     ],
//   },
// ];

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/DashboardPage") }],
  },
  // {
  //   path: "/index-page",
  //   component: () => import("pages/IndexPage.vue"),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
