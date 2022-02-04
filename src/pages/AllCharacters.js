import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { API_ENDPOINTS, API_URL_BASE } from "../helpers/urls";
const AllCharacters = () => {
  const { t } = useTranslation("characters");
  const { data } = useSWR(
    `${API_URL_BASE}${API_ENDPOINTS.CHARACTERS}`,
    fetcher
  );

  return (
    <>
      <PageTitle title={t("title")} />
      {!data && <Loading />}
      {data && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((character, index) => (
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
