### 完成度：

- 页面有一定的布局，但没有任何网络请求
- 静态页面，没有实现需求

**Details:**

### 测试：

- 没有测试

**Details:**

### 知识点：

- 有划分分组列表和学员列表组件，如果继续实现可以进一步进行组件的拆分和复用
- 语义化标签使用可以加强
- 没有使用 flex 布局，使用了 scss 及其基本特性
- 静态页面，无法考察 ES6+及请求相关知识点
- 运用 React 知识点，但完成度低，一些知识点无法考察

**Details:**

- \- 不用分成两个列表，一个列表通过样式控制换行，建议使用 flex 布局
- \- br 是自闭合标签
- \- 这里定义了 display:inline/inline-block 后，不用再设置 float:left；当然最好尝试使用 flex 布局

### 工程实践：

- 有小步提交，做的还可以，注意最好不要 push test commit
- 组件的拆分和复用需要加强
- 总体完成度较低，很多工程实践点无法考察
- scss 文件样式有出现重复代码
- 存在一些 lint error，需要 fix

**Details:**

- \- 多个位置采用同样的样式，只用定义一个样式，让那些位置都指定这个 class 名即可；不用像下面这样出现重复代码：如定义一个.common-group {...}，然后吧 Group 组件中所有 class=“firstgroup，secondgroup...”都改成 common-group
- \- Group 和 List 组件不要放在 App 文件夹下面，可以放在 Components/ 文件夹下，甚至在 Components/ 下建立对应的组件文件夹
- \- 加强语义化标签的使用
- \- 标签的 class 命名我们采用 a-b-c 的形式（first-group）
- \- 在正式 api 返回数据情况下，通过返回数据渲染 n 个组，不是写死 n 个组
