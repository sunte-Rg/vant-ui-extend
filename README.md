# wt-ui-extend

## vant-form
```
vant 表单校验 组件扩展
```
### Attributes 属性
参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
rules | 校验规则 | json | -- | --
inputVail | 是否需要输入实时检验 | bool | true、false | false

## rules 参数说明
key | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
required | 必填标识 | bool | true、false | false
regExp | 正则 | RegExp | -- | --
handleVailFun | 自定义校验函数，需返回bool | function | -- | --
 
### Method 事件
事件名 | 说明 | 参数 | 返回值
| --- | --- | --- | --- |
allVail | 获取整体校验结果 | 无 | bool（校验是否通过）

### Slot 插槽
name | 说明
| --- | --- |
items |	表单子元素 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
