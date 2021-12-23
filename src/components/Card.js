const Card = ({ character }) => (
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
        <p className="card-text">{character.occupation.join(", ")}</p>
        <p className="card-text">
          <small className="text-muted">
            Appearance Seasons: {character.appearance.join(", ")}
          </small>
        </p>
      </div>
    </div>
  </div>
);

export default Card;
