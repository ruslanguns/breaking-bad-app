import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

const Episodes = () => {
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.EPISODES}`
  );
  const tableValues = ["Season", "Episode", "Title", "Air date", "Characters"];

  return (
    <>
      <PageTitle title={"List of episodes"} />
      {loading && <Loading />}
      {!loading && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {tableValues.map((value) => (
                  <th key={value.toLowerCase()}className="text-center">{value}</th>
                ))}
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
