import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css";

import quizService from './quizService/index';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class QuizBee extends Component{
    state = {
        questionBank: [],
        score: 0,
        response: 0
    };

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            })
        });
    }

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            this.setState({
                score: this.state.score + 1
            });
        }

        this.setState({
            response: this.state.response < 5 ? this.state.response + 1 : 5
        })
    }
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            response: 0
        });
    }
    componentDidMount(){
        this.getQuestions();
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header text-center">
                            <h1>Quiz</h1>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        {this.state.questionBank.length > 0 && this.state.response < 5 && this.state.questionBank.map(({question, answers, correct, questionID}) => (
                            <QuestionBox question={question} options={answers} key={questionID}
                            selected={answer => this.computeAnswer(answer, correct)}
                            />
                        ))}

                        {this.state.response === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>) : null}
                    </div>                    
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <QuizBee />,
    document.getElementById('root')
);