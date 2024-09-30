<template>

</template>

<script setup lang="ts">
import {
	Engine3D,
	Scene3D,
	Object3D,
	Camera3D,
	DirectLight,
	View3D,
	AtmosphericComponent,
} from "@orillusion/core";

await Engine3D.init();


let scene3D = new Scene3D();
// 添加大气天空盒组件，自动生成背景和环境光
// let sky = scene3D.addComponent(AtmosphericComponent);
// // 太阳垂直位置，可以调节环境光亮度
// sky.sunY = 0.5
// sky.sunX = 0.5
// //调整环境光曝光度, 默认值1
// sky.exposure = 1.5;
// // 设置天空盒背景模糊强度, 范围[0, 1], 默认值0
// sky.roughness = 0;

// 自动跟随灯光,平行光源
let lightObj3D = new Object3D();
lightObj3D.rotationX = 40;
lightObj3D.rotationY = 62;
lightObj3D.rotationZ = 0;
let directLight = lightObj3D.addComponent(DirectLight);

let sky = scene3D.addComponent(AtmosphericComponent);
// 跟随平行光自动设置 sunX sunY
sky.relativeTransform = directLight.transform

// 创建摄像头对象
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);

// 创建View3D对象
let view = new View3D();
view.scene = scene3D;
view.camera = camera

Engine3D.startRenderView(view);
</script>

<style lang="scss" scoped></style>