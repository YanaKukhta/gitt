import React from 'react';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';

const App = () => {
 return (
  <BrowserRouter>
   <div>
    <Header />
    <div class="_container main">
     <Route path='/messages' component={Dialogs} />
     <Route path='/profile' component={Profile} />
     <Route path='/news' component={News} />
     <Route path='/music' component={Music} />
     <Route path='/settings' component={Settings} />
     <Navigation />
    </div>
   </div>
  </BrowserRouter>
 );
}

export default App;
