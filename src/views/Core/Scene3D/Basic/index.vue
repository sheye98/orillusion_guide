<template>
	<h1>Scene3D</h1>
</template>

<script setup lang="ts">
import {
	Engine3D,
	Scene3D,
	Object3D,
	Camera3D,
	View3D,
} from "@orillusion/core";


await Engine3D.init()

// 创建场景
let scene = new Scene3D();
// 添加节点
let obj = new Object3D()
scene.addChild(obj)

// 添加相机节点
let cameraObj = new Object3D()
let camera = cameraObj.addComponent(Camera3D);
scene.addChild(cameraObj)

// 开始渲染
let view = new View3D()
view.scene = scene
view.camera = camera
Engine3D.startRenderView(view);

// 移除一个节点
scene.removeChild(obj);

</script>
