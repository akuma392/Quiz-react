import React from 'react';

class Singlequestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      currentIndex: 0,
      //   currentQuestion: this.props.question.data[this.state.currentIndex],
    };
    // this.index = this.props.question.currentIndex;
    // this.question = this.props.question.data[this.state.currentIndex];
    // this.correct_answer = this.question.correct_answer;
  }

  handleClick = (event) => {
    this.setState({
      selectedOption: event.target.name,
    });
  };
  nextQuestion = () => {
    console.log('next question');
    this.setState((prevState) => {
      return {
        currentIndex: prevState.currentIndex + 1,
      };
    });
  };
  render() {
    console.log(this.state.selectedOption);

    let questionsArr = this.props.question.data;
    let currentQuestion = questionsArr[this.state.currentIndex];
    let answer = currentQuestion.correct_answer;
    let rightOption;
    if (answer == this.state.selectedOption) {
      rightOption = true;
    }

    return (
      <div className="w-2/4 mx-auto my-12 p-8">
        <p className="text-3xl font-bold">Q: {currentQuestion.question}</p>

        <ul className="grid grid-cols-2 gap-4 w-3/4 p-2">
          {currentQuestion.incorrect_answers.map((elm) => {
            return (
              <Input
                data={elm}
                handleClick={this.handleClick}
                state={this.state}
                answer={this.correct_answer}
              />
            );
          })}
          <Input
            data={currentQuestion.correct_answer}
            handleClick={this.handleClick}
            state={this.state}
            answer={this.correct_answer}
          />
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

function Input(props) {
  return (
    <>
      <label className="text-2xl mr-5">
        <input type="radio" onClick={props.handleClick} name={props.data} />
        {props.data}
      </label>
    </>
  );
}

export default Singlequestion;
