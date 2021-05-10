import React from 'react';
import Result from './Result';

class Singlequestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      randomNumber: 0,
      currentIndex: 0,
      score: 0,
      list: [
        {
          correct_answer: null,
          optionsSubmitted: null,
          question: null,
        },
      ],
    };
    // this.randomNumber = 0.5 - Math.random();
  }

  handleClick = (event) => {
    console.log(event.target.innerText);
    let questionsArr = this.props.question.data;
    let currentQuestion = questionsArr[this.state.currentIndex];
    let answer = currentQuestion.correct_answer;

    let rightOption;
    if (answer == event.target.innerText) {
      rightOption = true;
    } else {
      rightOption = false;
    }

    console.log(rightOption, typeof rightOption);
    this.setState((prevState) => {
      return {
        selectedOption: event.target.innerText,
        score: prevState.score + rightOption,
        list: prevState.list.concat({
          correct_answer: answer,
          optionsSubmitted: event.target.innerText,
          question: currentQuestion,
        }),
      };
    });
  };
  nextQuestion = () => {
    this.setState((prevState) => {
      return {
        currentIndex: prevState.currentIndex + 1,
        selectedOption: null,
        randomNumber: 0.5 - Math.random(),
      };
    });
  };
  render() {
    console.log(this.state);
    if (this.state.currentIndex == 10) {
      return <Result state={this.state} />;
    }

    let questionsArr = this.props.question.data;
    let currentQuestion = questionsArr[this.state.currentIndex];
    let answer = currentQuestion.correct_answer;
    let rightOption;
    let options = currentQuestion.incorrect_answers
      .concat(answer)
      .sort(() => this.state.randomNumber);
    if (answer == this.state.selectedOption) {
      rightOption = true;
    }
    console.log(this.state.randomNumber);

    return (
      <div className="w-2/4 mx-auto my-12 p-8">
        <p className="text-3xl font-bold">
          Q{this.state.currentIndex + 1}: {currentQuestion.question}
        </p>

        <ul className="grid grid-cols-2 gap-4 w-3/4 p-2">
          {options.map((elm) => {
            return (
              <button
                onClick={this.handleClick}
                className="bg-transparent hover:bg-blue-500 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-8"
              >
                {elm}
              </button>
            );
          })}
        </ul>

        <div className="grid grid-cols-2 gap-4 my-12">
          <p
            className={
              this.state.selectedOption &&
              (rightOption
                ? 'text-green-500 text-2xl '
                : 'text-red-500 text-2xl ')
            }
          >
            {this.state.selectedOption &&
              (rightOption ? 'correct answer' : 'wrong answer')}
          </p>

          <button
            onClick={this.nextQuestion}
            className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            next question
          </button>
        </div>
      </div>
    );
  }
}

export default Singlequestion;
