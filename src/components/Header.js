import Button from './Button';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" onClick={onClick} />
    </header>
  );
};

export default Header;
