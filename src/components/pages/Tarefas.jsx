import styles from "./Tarefas.module.css";
import TaskCard from "../tasks/TaskCard";

function Tarefas() {
  return (
    <div className={styles.tarefas_container}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}

export default Tarefas;
