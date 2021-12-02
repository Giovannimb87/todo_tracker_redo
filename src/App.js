import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'This is a much longer text to test',
      day: 'Day1',
      reminder: true,
    },
    {
      id: 2,
      text: 'Text2',
      day: 'Day2',
      reminder: true,
    },
    {
      id: 3,
      text: 'Text3',
      day: 'Day3',
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    const editedTask = {
      ...taskToEdit,
      text: window.prompt('Add new text here'),
    };
    //? How do I edit a specific property?
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks editTask={editTask} deleteTask={deleteTask} tasks={tasks} />
      ) : (
        'No Tasks Available'
      )}
    </div>
  );
}

export default App;
