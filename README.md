# 项目说明

## 启动

安装依赖

```
npm install
```

浏览器测试

```shell
npm run dev
```

发布

```shell
npm run build
```

单元测试

```shell
npm run unit
```

自动化测试

```shell
npm run e2e
```

所有测试

```shell
npm test
```

## 通过http-server部署应用

http-server 是一个简单的零配置命令行HTTP服务器, 基于 nodeJs.

**1.全局安装http-server**

```shell
npm install -g http-server
```

**2.build应用**

```shell
npm run build
```

> 在dist目录下生成资源文件

**3.部署**

```
cd dist

http-server
```

显示结果如下:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8081
  http://192.168.0.107:8081
```

**4.访问**

<http://127.0.0.1:8081>
