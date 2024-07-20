import React, {useState} from 'react';
import './App.css';
import {Btn} from "./Btn";

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [currentMoney, setCurrent] = useState(money)

    const Rub = () => {
        setCurrent(money.filter(m => m.banknots === 'RUBLS'));
    }

    const All = () => {
        setCurrent(money);
    }

    const Doll = () => {
        setCurrent(money.filter(m => m.banknots === 'Dollars'));
    }
    return (
        <>
            <div>
                <Btn name={"rub"} callback={Rub}/>
                <Btn name={"doll"} callback={Doll}/>
                <Btn name={"all"} callback={All}/>
            </div>

            <ul>
                {currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                           <span>{item.banknots} </span>
                           <span>{item.value} </span>
                           <span>{item.number} </span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default App;
