import "./../styles/components.css";
const Button = ({ label }) => {
  return (
    <>
      <button className="btn btn-info btn-lg btn-block custom-button">
        {label}
      </button>
    </>
  );
};

export default Button;
