import React, { Component } from 'react';
import './App.scss';
import List from './List';
import Group from './Group';

// TODO GTB-1: * 页面有一定的布局，但没有任何网络请求
// TODO GTB-1: * 静态页面，没有实现需求
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有划分分组列表和学员列表组件，如果继续实现可以进一步进行组件的拆分和复用
// TODO GTB-3: * 语义化标签使用可以加强
// TODO GTB-3: * 没有使用flex布局，使用了scss及其基本特性
// TODO GTB-3: * 静态页面，无法考察ES6+及请求相关知识点
// TODO GTB-3: * 运用React知识点，但完成度低，一些知识点无法考察
// TODO GTB-4: * 有小步提交，做的还可以，注意最好不要push test commit
// TODO GTB-4: * 组件的拆分和复用需要加强
// TODO GTB-4: * 总体完成度较低，很多工程实践点无法考察
// TODO GTB-4: * scss文件样式有出现重复代码
// TODO GTB-4: * 存在一些lint error，需要fix
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <List />
        <Group />
      </div>
    );
  }
}

export default App;
