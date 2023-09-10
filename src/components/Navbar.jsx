import React, { useState } from "react";
import ListItem from "./ListItem";
import { AiOutlineDelete } from "react-icons/ai";
const Navbar = ({ tasks, setTasks }) => {
  const [active, setActive] = useState("all");
  const [title, setTitle] = useState("");
  const HandleSubmit = () => {
    if (title !== "") {
      const newTask = {
        title: title,
        status: false,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
    return;
  };
  const arr = ["all", "active", "completed"];
  const HandleFilter = () => {
    if (active === "active") {
      return tasks.filter((task) => {
        return task.status === false;
      });
    } else if (active === "completed") {
      return tasks.filter((task) => {
        return task.status === true;
      });
    }
    return tasks;
  };
  const HandleDelete = () => {
    setTasks(
      tasks.filter((item) => {
        return item.status === false;
      })
    );
  };
  return (
    <>
      <nav className="navbar">
        <article className="listbar">
          {arr.map((item, index) => {
            return (
              <button
                key={index}
                id={item}
                className={`${active === item.toLowerCase() ? "active" : ""}`}
                onClick={(e) => {
                  setActive(e.currentTarget.id);
                }}
              >
                {item}
              </button>
            );
          })}
        </article>
      </nav>
      <section className="list-tabs">
        {active !== "completed" && (
          <form className="main-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="details"
              id="details"
              placeholder="Add New Task"
              value={title}
              onChange={(e) => {
                if (title.length >= 50) {
                  alert("Task should be not more than 50 letters");
                  setTitle("");
                } else {
                  setTitle(e.target.value);
                }
              }}
            />
            <button type="submit" onClick={HandleSubmit}>
              Add
            </button>
          </form>
        )}
        <ul>
          {HandleFilter()?.map((item, ind) => {
            return (
              <ListItem
                task={item}
                tasks={tasks}
                key={ind}
                setTasks={setTasks}
              />
            );
          })}
        </ul>
        {active === "completed" && (
          <article className="flex-end">
            <button className="delete" onClick={HandleDelete}>
              Delete All
              <AiOutlineDelete fontSize="1.5rem" />
            </button>
          </article>
        )}
      </section>
    </>
  );
};

export default Navbar;
