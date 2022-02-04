import { useFetchApi } from "../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "../helpers/urls";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import CharacterItemLoading from "../components/CharacterItemLoading";
const AllCharacters = () => {
  const { t } = useTranslation("characters");
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.CHARACTERS}`
  );
  return (
    <>
      <PageTitle title={t("title")} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading &&
          [...Array(6)].map((_, i) => <CharacterItemLoading key={i} />)}
        {!loading &&
          data.map((character, index) => (
            <Card
              character={character}
              useLabel={t("appearance_seasons")}
              key={index}
            />
          ))}
      </div>
    </>
  );
};

export default AllCharacters;
