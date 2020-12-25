import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <Navbar />
      <div className="app__content">
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }
