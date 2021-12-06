import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [toggleFormDisplay, setToggleFormDisplay] = useState(false);
  const [id, setId] = useState(4);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Task Data
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  // Toggle Form
  const toggleForm = () => {
    setToggleFormDisplay(!toggleFormDisplay);
  };

  // Add Task
  const addTask = (task) => {
    const newTask = { id: id, ...task };
    setTasks([...tasks, newTask]);
    setId(id + 1);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

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
      <Header
        toggleForm={toggleForm}
        isShowAddTask={toggleFormDisplay}
        title="Task Tracker"
      />
      {toggleFormDisplay && <AddTask addTask={addTask} />}
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
