import "./../styles/components.css";
import PropTypes from "prop-types";

const Button = ({ label, characterId, voteCharacter }) => {
  return (
    <>
      <button className="btn btn-info btn-lg btn-block custom-button"
        onClick={() => voteCharacter(characterId)}>
        {label}
      </button>
    </>
  );
};

// Para obligar pasar el argumento para el objeto
Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
