import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__content">
          <Route path="/Profile" render={() => <Profile />} />
          <Route
            path="/Dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
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
