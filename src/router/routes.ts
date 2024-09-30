// 对外暴露的路由
export const constantRoute = [
    {
        path: "/first_view",
        component: () => import("@/views/FirstView/index.vue"),
        name: "first_view",
    },
    {
        path: "/object3d",
        component: () => import("@/views/Core/Object3D/index.vue"),
        name: "object3d",
    },
    {
        path: "/scene3d",
        name: "scene3d",
        children: [
            {
                path: "/scene3d/basic",
                component: () => import("@/views/Core/Scene3D/Basic/index.vue"),
                name: "basic",
            },
            {
                path: "/scene3d/atmospheric",
                component: () =>
                    import("@/views/Core/Scene3D/Atmospheric/index.vue"),
                name: "atmospheric",
            },
            {
                path: "/scene3d/custom_atmospheric",
                component: () =>
                    import("@/views/Core/Scene3D/CustomAtmospheric/index.vue"),
                name: "custom_atmospheric",
            },
        ],
    },
];
