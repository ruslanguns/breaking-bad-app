import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import Loading from "../components/Loading";

const Episodes = () => {
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.EPISODES}`
  );
  return (
    <>
      <h1>Episodes!</h1>
      <p>List of episodes</p>
      {loading && <Loading />}
      {!loading && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Season</th>
                <th>Episode</th>
                <th>Title</th>
                <th>Air Date</th>
                <th>Characters</th>
              </tr>
            </thead>

            <tbody>
              {data.map((episode, index) => (
                <tr key={index}>
                  <td>{episode.season}</td>
                  <td>{episode.episode}</td>
                  <td>{episode.title}</td>
                  <td>{episode.air_date}</td>
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
