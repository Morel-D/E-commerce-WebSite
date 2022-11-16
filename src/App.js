import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import React from 'react';
import FetchData from './components/fetchData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import View from './components/View';

function App() {

  const { data: items, error } = FetchData('http://localhost:8000/items');

  return (
    <Router>
       <div className='app'>
         {items && <Navbar items ={items.filter((item) =>item.value > 0).length} />}
         <div className='content'>
          <Switch>

            <Route exact path="/">
             <Content />
            </Route>
            
            <Route path="/View">
            {items && <View items ={items.filter((item) =>item.value > 0).length} />}
            </Route>


          </Switch>
         </div>
         </div> 
    </Router>
  );
}

export default App;
