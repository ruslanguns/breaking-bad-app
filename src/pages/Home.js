import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import Card from "../components/Card";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

const Home = () => {
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.CHARACTERS}`
  );
  return (
    <>
      <PageTitle title={"Home"} />
      {loading && <Loading />}
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
