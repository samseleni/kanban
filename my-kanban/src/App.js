import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";

import "./App.css";
import data from "./mock.json";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const {users} = data;
  const activeUser = users.find(user => user.active === "yes");
  
  const initialState = JSON.parse(window.localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

useEffect(() => {
  window.localStorage.setItem("tasks",JSON.stringify(tasks));
}, [tasks]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} name={activeUser.name} year={activeUser.year}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
