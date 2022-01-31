import { useFetchApi } from "../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "../helpers/urls";
import Card from "../components/Card";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
const AllCharacters = () => {
  const { t } = useTranslation("characters");
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.CHARACTERS}`
  );
  return (
    <>
      <PageTitle title={t("title")} />
      {loading && <Loading />}
      {!loading && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((character, index) => (
            <Card character={character} useLabel={t("appearance_seasons")} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllCharacters;
