
# 模拟数据服务器(nodejs)

## 目录
``` bash
├── app                     # 业务部分
    ├── api                 # api接口目录
    ├── factory/errors.js   # 定义错误对象
├── bin                     # 执行文件
├── config                  # 项目配置
    ├── env.js              # 应用配置（端口，域名，api接口的基础地址，比如/api/）
    ├── errorcode.js        # 错误码定义
    ├── validator.js        # 参数校验规则定义
├── utils                   # 工具类
├── views                   # 视图，此项目只做接口服务，没用到，预留
├── package.json            # NPM元文件
├── README.md               # 帮助文档
├── .babelrc                # babel配置文件
├── .editorconfig.js        # editor配置文件
├── .eslintrc.js            # eslint配置文件
└── index.html              # index.html模板
```

## 启动项目

``` bash
# 安装依赖文件
npm install 

# 启动项目(任选)
[荐] pm2 start bin/www [pm2 环境]
> npm start [forever环境]
> node bin/www
```

## 新建接口
npm run addapi [name-method]
```
    eg: 新建接口 /api/vi/containers, 使用get方法 ===>>> npm run addapi containers-get
    ps: 如果是 method === 'get'，会自动启动默认浏览器打开调试接口
```

## 删除接口
npm run removeapi [name-method]
```
    eg: 移除接口 /api/v1/containers, get方法 ===>>> npm run removeapi containers-get
    ps: 移除之后如果该资源目录为空，则会自动删除这个目录
```
## 配置
配置文件config/env.js
```
    port: 服务器端口
    domain: 域名配置，需要重新手动指定端口号
    api_base: api接口公用前缀，比如之前例子中的 /api/v1
```

## 接口参数校验
打开接口对应的文件，比如 containers/get.js
```
    配置 paramRegular 变量，比如 required, email等，手动配置规则在config/validator.js中完成
```
