import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import { Ring } from "react-awesome-spinners";

const Home = () => {
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.CHARACTERS}`
  );
  return (
    <>
      <h1>Home!</h1>
      <p>Home page</p>
      {loading && (
        <span className="loading"><Ring size={454}/></span>
      )}
      {!loading && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((character) => (
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
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
