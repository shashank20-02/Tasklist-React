import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  let response = localStorage.getItem("tasks");
  if (response !== null) {
    response = JSON.parse(response);
  }
  const [tasks, setTasks] = useState(
    response || [
      {
        title: "Code 2 Questions",
        status: false,
      },
      {
        title: "cook 2 meals - Pasta and Chole Bhature",
        status: true,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main>
      <h1 className="heading">TaskList - React</h1>

      <article className="container">
        <Navbar tasks={tasks} setTasks={setTasks} />
      </article>
    </main>
  );
};

export default App;
