import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__content">
          <Route path="/Profile" component={Profile} />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
          {/* <Profile /> */}
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
