// 对外暴露的路由
export const constantRoute = [
    {
        path: "/first_view",
        component: () => import("@/views/FirstView/index.vue"),
        name: "first_view",
    },
];
