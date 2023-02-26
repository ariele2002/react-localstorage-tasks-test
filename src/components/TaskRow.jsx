function TaskRow({ task, toggleTask }) {
  return (
    <tr key={task.name}>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          defaultChecked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
}

export default TaskRow;
