import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(`https://opentdb.com/api_category.php`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.trivia_categories }));
  }
  render() {
    if (!this.state.data) {
      return (
        <h3 className="text-center text-xl text-green-600">Loading....</h3>
      );
    }
    return (
      <ul className="grid grid-cols-5 gap-4 w-3/4 mx-auto my-12">
        {this.state.data.map((elm) => {
          return (
            <li
              key={elm.id}
              className="text-center p-4 border-gray-500 border-solid border-2 bg-gray-200"
            >
              <p>{elm.name}</p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5">
                <Link to={`/quiz/${elm.id}`}>Start quiz</Link>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
