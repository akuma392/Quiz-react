import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="text-center py-5 bg-indigo-300 mb-12 flex justify-between">
      <h2 className="text-3xl font-bold text-red-600 ml-12">Quiz </h2>
      <Link to="/">
        <p className="text-2xl font-bold mr-12">Choose Category</p>
      </Link>
    </div>
  );
}

export default Header;
