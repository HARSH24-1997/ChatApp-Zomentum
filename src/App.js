import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Chat from './pages/Chat/Chat'
import Home from './pages/Home/Home'
import Protected from './components/ProtectedRoute';


function App() {
  return (
    <div className="global">
      <BrowserRouter> 
      <Switch> 
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Protected exact path="/Chat" component={Chat} />
     {/* <Chat/> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
