import React, {Component} from 'react'
import  './List.scss'

class List extends React.Component {
  render() {
    return (
        <div className='list'>
            <h2>学员列表</h2>
            <div >
                <ul className = 'people one list'>
                    <li className = 'number1'>1.成吉思汗</li>
                    <li className = 'number2'>2.鲁班七号</li>
                    <li className = 'number3'>3.太乙真人</li>
                    <li className = 'number4'>4.钟无艳</li>
                    <li className = 'number5'>5.花木兰</li>
                    <li className = 'number6'>6.雅典娜</li>
                    <li className = 'number7'>7.芈月</li>
                    <li className = 'number8'>8.白起</li>
                </ul>
                <br></br>
                <ul className = 'people two list'>
                <li className = 'number9'>9.刘禅</li>
                    <li className = 'number10'>10.庄周</li>
                    <li className = 'number11'>11.马超</li>
                    <li className = 'number12'>12.刘备</li>
                    <li className = 'number13'>13.哪吒</li>
                    <li className = 'number14'>14.大乔</li>
                    <li className = 'number15'>15.蔡文姬</li>
                </ul>
                <button className = 'add'>+添加学员</button>
            </div>
           
        </div>
       
    );
  }
}
export default List;