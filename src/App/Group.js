import React from 'react';
import './Group.scss';

// TODO GTB-4: - Group和List组件不要放在App文件夹下面，可以放在Components/ 文件夹下，甚至在Components/ 下建立对应的组件文件夹
class Group extends React.Component {
  render() {
    return (
      // TODO GTB-4: - 加强语义化标签的使用
      <div className="title">
        <h2>分组列表</h2>
        <button className="button">分组学员</button>

        {/* TODO GTB-4: - 标签的class命名我们采用a-b-c的形式（first-group） */}
        {/* TODO GTB-4: - 在正式api返回数据情况下，通过返回数据渲染n个组，不是写死n个组 */}
        <div className="firstgroup">
          <header>1 组</header>
          <ul>
            <li>1.成吉思汗</li>
            <li>2.鲁班七号</li>
            <li>3.太乙真人</li>
          </ul>
        </div>

        <div className="secondgroup">
          <header>2 组</header>
          <ul>
            <li>4.钟无艳</li>
            <li>5.花木兰</li>
            <li>6.雅典娜</li>
          </ul>
        </div>

        <div className="thirdgroup">
          <header>3 组</header>
          <ul>
            <li>7.芈月</li>
            <li>8.白起</li>
            <li>9.刘禅</li>
          </ul>
        </div>

        <div className="forthgroup">
          <header>4 组</header>
          <ul>
            <li>10.庄周</li>
            <li>11.马超</li>
          </ul>
        </div>

        <div className="fifthgroup">
          <header>5 组</header>
          <ul>
            <li>12.刘备</li>
            <li>13.哪吒</li>
          </ul>
        </div>

        <div className="sixthgroup">
          <header>6 组</header>
          <ul>
            <li>14.大乔</li>
            <li>15.蔡文姬</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Group;
