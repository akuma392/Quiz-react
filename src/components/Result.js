import { Link } from 'react-router-dom';

function Result(props) {
  //   return (
  //     // <ul>
  //     //   <li>
  //     //     <p>question</p>
  //     //     <p>Your answer</p>
  //     //     <p>Correct answer</p>
  //     //   </li>
  //     //   {props.state.list.map((elm) => {
  //     //     return (
  //     //       <li className="flex mb-8 ">
  //     //         <p>Q:{elm.question}</p>
  //     //         <p>{elm.optionsSubmitted}</p>
  //     //         <p>{elm.correct_answer}</p>
  //     //       </li>
  //     //     );
  //     //   })}
  //     // </ul>
  //   );

  return (
    <div className="w/1/2 mx-auto my-12 text-center">
      <h1 className="text-center text-3xl text-green-600 my-12 font-bold">
        Your score is: {props.state.score}
      </h1>
      <Link className="text-2xl text-red-400 font-bold my-5" to="/">
        Retake Quiz
      </Link>
    </div>
  );
}

export default Result;
