import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Join from './components/Join'
import Contact from './components/Contact'

import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='wrapper-column'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/join" exact component={Join} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
