import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import './App.css';

const App = () => {
 return (
<div>
 <Header />
 <div class="_container main">
 <Profile />
 <Navigation />
 </div>
</div>
 );
}

export default App;
