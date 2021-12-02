import Task from './Task';

const Tasks = ({ tasks, deleteTask, editTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          editTask={editTask}
          deleteTask={deleteTask}
          key={task.id}
          task={task}
        />
      ))}
    </>
  );
};

export default Tasks;
