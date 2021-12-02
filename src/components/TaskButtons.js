import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

const TaskButtons = ({ deleteTask, task, editTask }) => {
  return (
    <div>
      <FaEdit className="btn__edit" onClick={() => editTask(task.id)} />
      <FaTimes
        className="btn__delete"
        onClick={() =>
          window.confirm(`Are you sure you wish to delete ${task.text}?`)
            ? deleteTask(task.id)
            : alert('Deletion aborted!')
        }
      />
    </div>
  );
};

export default TaskButtons;
