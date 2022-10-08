import React, { Component } from "react";
import './Quiz.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";
import { useParams } from "react-router-dom";

class Quiz extends Component {

    state = {
        results: {}, //{ [id]: ''success' 'error'}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, //{ [id]: ''success' 'error'}
        quiz: [],
        loading: true

        // quiz: [
        //     {
        //         question: 'Пятая планета от солнца?',
        //         rightAnswerId: 2,
        //         id: 1,
        //         answers: [
        //             {text: 'Марс', id: 1},
        //             {text: 'Юпитер', id: 2},
        //             {text: 'Сатурн', id: 3},
        //             {text: 'Уран', id: 4},
        //         ]
        //     },
        //     {
        //         question: 'Какого цвета нет в радуге?',
        //         rightAnswerId: 3,
        //         id: 2,
        //         answers: [
        //             {text: 'Голубой', id: 1},
        //             {text: 'Красный', id: 2},
        //             {text: 'Белый', id: 3},
        //             {text: 'Синий', id: 4},
        //         ]
        //     }
        // ]
    };

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        console.log('Answer Id: ', answerId);

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion : this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1500)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results,
            })
        }

        
    };

    isQuizFinished () {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState ({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    const params = useParams();

    async componentDidMount() {
        // try {
        //     const response = await axios.get(`quizes/${this.props.match.params.id}`)
        //     const quiz = response.data

        //     this.setState({
        //         quiz,
        //         loading: false
        //     })
        // } catch (e) {
        //     console.log(e)
        // }

        // const params = useParams();

        console.log('Quiz ID= ', this.props.match.params.id)
    }

    // Обычная функция не работает, только стрелочная
    // onAnswerClickHandler (answerId) {
    //     console.log('Answer Id: ', answerId);
    //     // this.setState({
    //     //     activeQuestion: this.state.activeQuestion + 1
    //     // })
    // };

    render() {
        return (
            <div className='Quiz'>
                <div className="QuizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    {this.state.loading ? <Loader/> :
                        this.state.isFinished ? 
                        <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        /> :
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                    />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz;