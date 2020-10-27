import React from 'react';


class Group extends React.Component {
  render() {
    return (
        <div className = "title">
            <h2>分组列表</h2>
            <button className = 'button'>分组学员</button>

            <div className = "firstgroup">
                <header>1 组</header>
                <ul>
                    <li>1.成吉思汗</li>
                    <li>2.鲁班七号</li>
                    <li>3.太乙真人</li>
                </ul>
            </div>

            <div className = "secondgroup">
                <header>2 组</header>
                <ul>
                    <li>4.钟无艳</li>
                    <li>5.花木兰</li>
                    <li>6.雅典娜</li>
                </ul>
            </div>

            <div className = "thirdgroup">
                <header>3 组</header>
                <ul>
                    <li>7.芈月</li>
                    <li>8.白起</li>
                    <li>9.刘禅</li>
                </ul>
            </div>

            <div className = "forthgroup">
                <header>4 组</header>
                <ul>
                    <li>10.庄周</li>
                    <li>11.马超</li>
                </ul>
            </div>

            <div className = "fifthgroup">
                <header>5 组</header>
                <ul>
                    <li>12.刘备</li>
                    <li>13.哪吒</li>
                </ul>
            </div>

            <div className = "sixthgroup">
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