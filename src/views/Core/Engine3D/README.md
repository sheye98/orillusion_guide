# Engine3D

Engine3D 是引擎核心唯一的全局实例，主要有以下几个常用方法：

- 调用 `Engine3D.init()` 来初始化引擎
- 调用 `Engine3D.startRenderView()` 开启视图渲染循环
- `Engine3D.res` 加载网络贴图或模型资源，详见 资源加载
- `Engine3D.inputSystem` 统一管理用户的输入事件，详见 交互
- `Engine3D.setting` 统一配置渲染相关功能，详见 配置

## 初始化
通过 `Engine3D.init()` 方法来初始化引擎，默认参数可以为空。

引擎内部的初始化需要请求 `GPU` 设备，初始化请求 `GPU` 设备是异步过程，因此需要用异步的方式调用，我们推荐使用 `async/await` 字段进行调用。

## 渲染循环回调

## 配置 Canvas

## 开始渲染