import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import { Ring } from "react-awesome-spinners";

const Episodes = () => {
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.EPISODES}`
  );
  console.log(data);
  return (
    <>
      <h1>Episodes!</h1>
      <p>List of episodes</p>
      {loading && (
        <span className="loading"><Ring size={454}/></span>
      )}
      {!loading && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <td>Season</td>
              <td>Title</td>
              <td>Characters</td>
            </thead>

            <tbody>
              {data.map((episode, index) => (
                <tr key={index}>
                  <td>{episode.season}</td>
                  <td>{episode.episode}</td>
                  <td>{episode.title}</td>
                  <td>{episode.characters.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Episodes;
