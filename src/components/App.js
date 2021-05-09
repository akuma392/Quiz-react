import React from 'react';

import { Route } from 'react-router-dom';
import Category from './Category';
import Header from './Header';
import Questions from './Questions';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        {/* <Category /> */}
        <Route path="/quiz/:id" component={Questions} />
        <Route path="/" exact>
          <Category />
        </Route>
      </>
    );
  }
}

export default App;
