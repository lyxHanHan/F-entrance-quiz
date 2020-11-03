import React, { Component } from 'react';
import './List.scss';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h2>学员列表</h2>
        <div>
          {/* TODO GTB-3: - 不用分成两个列表，一个列表通过样式控制换行，建议使用flex布局 */}
          <ul className="people one list">
            <li className="number1">1.成吉思汗</li>
            <li className="number2">2.鲁班七号</li>
            <li className="number3">3.太乙真人</li>
            <li className="number4">4.钟无艳</li>
            <li className="number5">5.花木兰</li>
            <li className="number6">6.雅典娜</li>
            <li className="number7">7.芈月</li>
            <li className="number8">8.白起</li>
          </ul>
          {/* TODO GTB-3: - br是自闭合标签 */}
          <br />
          <ul className="people two list">
            <li className="number9">9.刘禅</li>
            <li className="number10">10.庄周</li>
            <li className="number11">11.马超</li>
            <li className="number12">12.刘备</li>
            <li className="number13">13.哪吒</li>
            <li className="number14">14.大乔</li>
            <li className="number15">15.蔡文姬</li>
          </ul>
          <button className="add">+添加学员</button>
        </div>
      </div>
    );
  }
}
export default List;
