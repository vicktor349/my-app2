import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/pages/Contact';
import Certificate from './components/pages/Certificate';
import CV from './components/pages/CV';

const App = () => {
    return (
      <div className="page-contents">
        <Router>
          <Navbar />
          <Route exact path ='/' component={Home} />
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/certificate' component={Certificate}/>
          <Route exact path='/cv' component={CV}/>
        </Router>
      </div>
    );
  }
   
  export default App;
