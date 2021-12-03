import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [id, setId] = useState(4);
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

  // Add Task
  const addTask = (task) => {
    const newTask = { id: id, ...task };
    setTasks([...tasks, newTask]);
    setId(id + 1);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: window.prompt('Add new text here') }
          : task
      )
    );
    // const taskToEdit = tasks.find((task) => task.id === id);
    // const editedTask = {
    //   ...taskToEdit,
    //   text: window.prompt('Add new text here'),
    // };
    // const newData = [
    //   ...tasks.filter((task) => task.id !== id),
    //   editedTask,
    // ].sort((a, b) => a.id - b.id);
    // setTasks([...newData]);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask addTask={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          toggleReminder={toggleReminder}
          editTask={editTask}
          deleteTask={deleteTask}
          tasks={tasks}
        />
      ) : (
        'No Tasks Available'
      )}
    </div>
  );
}

export default App;
