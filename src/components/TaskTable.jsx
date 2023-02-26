import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted }) {
  const taskTableRows = (doneValue = false) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task, i) => {
        return <TaskRow task={task} toggleTask={toggleTask} key={i} />;
      });
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
