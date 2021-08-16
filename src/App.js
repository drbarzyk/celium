import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'

import Header from './components/Header'
import Map from './components/Map'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='wrapper'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={Blog} />
          </Switch>
        </div>
      </Router>
    </div>

    // <Router>
    //   <div>
    //     <Header />
    //     <div className='content'>
    //       <Map />
    //     </div>


    //   </div>
    // </Router>

  );
}

export default App;
