import React from 'react';
import Singlequestion from './SInglequestion';
let allQuestions;

class Questions extends React.Component {
  constructor(props, allQuestions) {
    super(props);

    this.state = {
      isSubmitted: false,
      //   currentIndex: 0,
      data: null,
    };
    this.categoryId = this.props.match.params.id;
    this.allQuestions = allQuestions;
  }

  componentDidMount() {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${this.categoryId}&difficulty=easy`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }

  //   handleQuestion = () => {
  //     console.log('next question');
  //     this.setState((prevState) => {
  //       return {
  //         currentIndex: prevState.currentIndex + 1,
  //       };
  //     });
  //   };
  render() {
    console.log(this.categoryId, this.state.data);

    if (!this.state.data) {
      return (
        <h2 className="text-center text-2xl my-12 font-bold">Loading....</h2>
      );
    }
    return (
      <>
        <Singlequestion
          question={this.state}
          handleQuestion={this.handleQuestion}
        />
      </>
    );
  }
}

export default Questions;
