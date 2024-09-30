<template>

</template>

<script setup lang="ts">
import {
	Engine3D,
	Scene3D,
	Object3D,
	Camera3D,
	View3D,
	LitMaterial,
	BoxGeometry,
	MeshRenderer,
	DirectLight,
	HoverCameraController,
	AtmosphericComponent,
	ComponentBase,
	Color,
	Time,
} from "@orillusion/core";

class LightAnimation extends ComponentBase {
	private light: DirectLight;
	private color: Color;

	constructor(light: any, color: any) {
		super()
		this.light = light
		this.color = color;
	}

	public start() {
		this.light = this.object3D.getComponent(DirectLight);
		this.color = this.light.lightColor;
	}
	
	// 精神小 cube
	public onUpdate() {
		this.color.r = Math.pow(Math.sin(Time.time * 0.001), 10);
		this.color.g = Math.pow(Math.sin(Time.time * 0.002), 10);
		this.color.b = Math.pow(Math.sin(Time.time * 0.003), 10);

		this.light.lightColor = this.color;
	}
}

class UserLogic {
	private scene: Scene3D;
	private cube: Object3D;
	private light: DirectLight;

	constructor(scene: Scene3D, light: any, cube: Object3D) {
		this.scene = scene
		this.light = light;
		this.cube = cube
	}

	init(scene3D: Scene3D) {
		this.scene = scene3D;
		this.createCube();
		this.createLight();
		this.createComponents();
	}

	// 创建正方体
	private createCube() {
		let mat = new LitMaterial();
		mat.roughness = 1.0;

		let obj: Object3D = new Object3D();
		let geometry = new BoxGeometry(3, 3, 3);
		let mr = obj.addComponent(MeshRenderer);
		mr.material = mat;
		mr.geometry = geometry;


		this.scene.addChild(obj);
	}

	// 创建光照
	private createLight() {
		let light: Object3D = new Object3D();
		let component = light.addComponent(DirectLight);
		light.rotationX = -45;
		light.rotationY = -45;
		light.rotationZ = -45;
		component.lightColor = new Color(1.0, 0, 0, 1);

		component.intensity = 20;
		this.scene.addChild(light);
		this.light = component;
	}

	private createComponents() {
		this.light.object3D.addComponent(LightAnimation);
	}

	async run() {
		await Engine3D.init();
		this.init(new Scene3D());
		let cameraObj = new Object3D();
		let camera = cameraObj.addComponent(Camera3D);
		camera.perspective(60, Engine3D.aspect, 1, 5000.0);
		let controller = camera.object3D.addComponent(HoverCameraController);
		controller.setCamera(-135, 0, 15);

		this.scene.addChild(cameraObj);
		this.scene.addComponent(AtmosphericComponent).sunY = 0.6;

		let view = new View3D();
		view.scene = this.scene;
		view.camera = camera;
		// start render
		Engine3D.startRenderView(view);
	}

}

new UserLogic().run();

</script>

<style lang="scss" scoped></style>