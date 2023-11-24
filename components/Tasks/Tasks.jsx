import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./tasks.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "Vytautas",
      surname: "Petrikas",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      name: "Vytautas",
      surname: "Petrikas",
      isCompleted: false,
    },
  ]);

  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.tasks}>
          <div>{`Name: ${task.name}`}</div>
          <div>{`Surname: ${task.surname}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
