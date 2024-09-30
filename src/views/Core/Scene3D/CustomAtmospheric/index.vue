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
	SolidColorSky,
	Color,
	SkyRenderer,
	Texture,
} from "@orillusion/core";

// await Engine3D.init();

// 1. 单色背景和环境光
// let scene = new Scene3D();
// // 创建一个纯色贴图
// let colorSky = new SolidColorSky(new Color(0.5, 1.0, 0.8, 1))
// // 添加 SkyRenderer 组件，然后设置 map 贴图
// let sky = scene.addComponent(SkyRenderer);
// sky.map = colorSky;

// // 同时设置单色环境光
// scene.envMap = colorSky;

// 2. 十字天空盒
// 可以加载一张完整十字立方贴图
// let textureCube = Engine3D.res.loadTextureCube(
// 	'./image.png')
// 或加载独立的6张立方贴图
// textureCube = Engine3D.res.loadTextureCube([
// 	'path/to/px.png',
// 	'path/to/nx.png',
// 	'path/to/py.png',
// 	'path/to/ny.png',
// 	'path/to/pz.png',
// 	'path/to/nz.png'
// ])

// let scene = new Scene3D();

// // 添加 SkyRenderer 组件，设置 map 贴图
// let sky = scene.addComponent(SkyRenderer);
// sky.map = textureCube;

// // 设置环境光
// scene.envMap = textureCube;

// 3. 全景天空盒
// 普通全景贴图
//  let skyTexture = Engine3D.res.loadLDRTextureCube('path/to/sky.png');
// HDR全景贴图
// let skyTexture = Engine3D.res.loadHDRTextureCube('./little_paris_under_tower_4k.hdr');

// let scene = new Scene3D();
// // 添加 SkyRenderer 组件，设置 map 贴图
// let sky = scene.addComponent(SkyRenderer);

// skyTexture.then((value: Texture) => {
// 	sky.map = value
// });

// // 设置环境光
// skyTexture.then((value: Texture) => {
// 	scene.envMap = value
// });

// 4. 透明背景
// 初始化引擎
await Engine3D.init({
    canvasConfig:{
        alpha: true, // 使用透明的 Canvas 配置
        zIndex: 1
    }
});

let scene = new Scene3D();

// 可以先添加大气天空盒，获得基本环境光
let sky = scene.addComponent(AtmosphericComponent);
// 再隐藏大气天空盒, 环境光不会消失
sky.enable = false

// 创建摄像头对象
let cameraObj = new Object3D();
let camera = cameraObj.addComponent(Camera3D);

// 创建View3D对象
let view = new View3D();
view.scene = scene;
view.camera = camera

Engine3D.startRenderView(view);
</script>

<style lang="scss" scoped></style>