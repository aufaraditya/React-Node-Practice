import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import ItemDetail from './ItemDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/"  exact component={Home}/> /* exact means the route can be /* */
          <Route path="/About" component={About}/>
          <Route path="/Shop" exact component={Shop}/> /* exact means the route can be /Shop/* */
          <Route path="/Shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  ); 
}

function Home(){
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}


export default App;
