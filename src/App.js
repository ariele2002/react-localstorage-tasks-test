import { useState, useEffect } from "react";

import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import { Container } from "./components/Container";
// import TaskList from "./components/TaskList";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      // no tenga tasks repetidos.
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  function cleanTasks() {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <main className="bg-dark text-white vh-100">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isCheked={showCompleted}
          setShowCompleted={setShowCompleted}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={true}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
