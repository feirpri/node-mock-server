### 使用方法
1. npm install ==>>下载第三方插件
2. npm start ===>> 启动服务器

### 新建接口
1. npm run addapi [name-method]
    eg: 新建接口 /api/vi/containers, 使用get方法 ===>>> npm run addapi containers-get
    ps: 如果是 method === 'get'，会自动启动默认浏览器打开调试接口

### 删除接口
1. npm run removeapi [name-method]
    eg: 移除接口 /api/v1/containers, get方法 ===>>> npm run removeapi containers-get
    ps: 移除之后如果该资源目录为空，则会自动删除这个目录

### 配置
1. 配置文件config/env.js
    port: 服务器端口
    domain: 域名配置，需要重新手动指定端口号
    api_base: api接口公用前缀，比如之前例子中的 /api/v1

### 接口参数校验
1. 打开接口对应的文件，比如 containers/get.js
    配置 paramRegular 变量，比如 required, email等，手动配置规则在config/validator.js中完成
