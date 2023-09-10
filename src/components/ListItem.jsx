import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
const ListItem = ({ tasks, task, setTasks }) => {
  const HandleClick = () => {
    const dumTasks = tasks.map((item) => {
      if (item === task) {
        item.status = !item.status;
      }
      return item;
    });
    setTasks(dumTasks);
  };
  const HandleDelete = () => {
    const delTasks = tasks.filter((item) => {
      return item !== task;
    });
    setTasks(delTasks);
  };
  return (
    <li className={`list-item ${task.status && "checked"}`}>
      <form>
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={task.status}
          onClick={HandleClick}
        />
      </form>
      <article className="article">
        <p>{task.title}</p>
        <button onClick={HandleDelete}>
          <AiOutlineDelete fontSize="1.5rem" />
        </button>
      </article>
    </li>
  );
};

export default ListItem;
