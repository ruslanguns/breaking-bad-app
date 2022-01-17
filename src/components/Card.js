import PropTypes from "prop-types";
import { Button } from ".";
import { openExternalURL } from "../helpers/navigate";

const Card = ({ character }) => {
  const goToMoreDetails = (url) => openExternalURL(url);
  return (
    <div className="col" key={character.char_id}>
      <div className="card">
        <div className="image-section">
          <img
            src={character.img}
            className="card-img-top"
            alt={character.name}
          />
          <span className="bottom-left">{character.portrayed}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          {
            (character.char_id === undefined) ?
            (
              <>
              <p className="card-text truncate">{character.description}</p>
              
              <Button
                key={`Wiki_${character.id}`}
                label={"Más información"}
                param={character.url}
                action={goToMoreDetails}
              />
              </>
            ): (
              <>
              <p className="card-text">{character.occupation.join(", ")}</p>
              <p className="card-text">
                <small className="text-muted">
                  Appearance Seasons: {character.appearance.join(", ")}
                </small>
              </p>
              </>
            )
          }
          
        </div>
      </div>
    </div>
  )
};

// Para obligar pasar el argumento para el objeto
Card.propTypes = {
  character: PropTypes.object.isRequired,
};
export default Card;
