function VisibilityControl({ setShowCompleted, cleanTasks, isCheked }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          checked={isCheked}
          onChange={(e) => {
            setShowCompleted(e.target.checked);
          }}
          className="form-check-input"
        />
        <label>Show completed tasks</label>
      </div>
      <button
        onClick={() => {
          handleDelete();
        }}
        className="btn btn-danger btn-sm"
      >
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;
