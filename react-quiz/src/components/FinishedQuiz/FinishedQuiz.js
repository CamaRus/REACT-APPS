import React from "react";
import './FinishedQuiz.css';
import Button from "../UI/Button/Button";

const FinishedQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className="FinishedQuiz">
            <ul>
                {props.quiz.map((quiz, index) => {
                    let cls = ''
                     if (props.results[quiz.id] === 'error') {
                         cls = 'Wrong'
                     } else {
                         cls = 'Right'
                     }
        
                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.$nbsp;
                            <span className={cls}>{quiz.question}</span>
                        </li>
                    )
                })}
                {/* <li>
                    <strong>1. </strong><span className="Right">How are you</span>
                </li>
                <li>
                    <strong>1. </strong><span className="Wrong">How are you</span>
                </li> */}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button
                    className="Button primary" 
                    onClick={props.onRetry} 
                    type="primary">Повторить
                </button>
                <button
                    className="Button success"
                    type="success">Перейти в список тестов
                </button>
            </div>
        </div>
    )
}

export default FinishedQuiz;