import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Join from './pages/Join'
import Contact from './pages/Contact'

import Header from './components/Header'
import Footer from './components/Footer'

import NewHeader from './components/NewHeader'

function App() {
  return (
    // <div>
    //   <Router>
    //     <Header />
    //     <div className='wrapper-column'>
    //       <Switch>
    //         <Route path="/" exact component={Home} />
    //         <Route path="/join" exact component={Join} />
    //         <Route path="/about" exact component={About} />
    //         <Route path="/projects" exact component={Projects} />
    //         <Route path="/blog" exact component={Blog} />
    //         <Route path="/contact" exact component={Contact} />
    //       </Switch>
    //     </div>
    //   </Router>
    // </div>

    <div className="app">
      <Router>
        <NewHeader />
        <Switch>
             <Route path="/" exact component={Home} />
             <Route path="/join" exact component={Join} />
             <Route path="/about" exact component={About} />
             <Route path="/projects" exact component={Projects} />
             <Route path="/blog" exact component={Blog} />
             <Route path="/contact" exact component={Contact} />
           </Switch>
      </Router>
    </div>
  );
}

export default App;
