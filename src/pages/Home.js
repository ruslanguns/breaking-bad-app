import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import Card from "../components/Card";
import Loading from "../components/Loading";
const Home = () => {
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.CHARACTERS}`
  );
  return (
    <>
      <h1>Home!</h1>
      <p>Home page</p>
      {loading && (
        <Loading />
      )}
      {!loading && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((character, index) => (
            <Card character={character} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
