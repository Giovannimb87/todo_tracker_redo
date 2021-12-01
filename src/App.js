import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Text1',
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
  return (
    <div className="container">
      <Header title={'Task Tracker'} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
