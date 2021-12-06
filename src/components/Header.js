import Button from './Button';

const Header = ({ title, toggleForm, isShowAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={!isShowAddTask ? 'Add' : 'Close'}
        color={!isShowAddTask ? 'green' : 'red'}
        onClick={toggleForm}
      />
    </header>
  );
};

export default Header;
