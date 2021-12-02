import Task from './Task';

const Tasks = ({ tasks, deleteTask, editTask, toggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          editTask={editTask}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
