import TaskButtons from './TaskButtons';

const Task = ({ task, deleteTask, editTask, toggleReminder }) => {
  return (
    <div className="task" onDoubleClick={() => toggleReminder(task.id)}>
      <div>
        <h3>
          {task.text}{' '}
          <TaskButtons
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />{' '}
        </h3>
      </div>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
