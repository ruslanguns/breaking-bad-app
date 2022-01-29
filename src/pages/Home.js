import { useQuery } from "@apollo/client";
import Card from "../components/Card";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";
import { PRINCIPAL_CHARACTERS_VOTES } from "../graphql/operations/query";
import "./../configs/i18n";
import { useTranslation } from "react-i18next";
// import { useSetLanguage } from "../hooks/useSetLanguage";
const Home = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(PRINCIPAL_CHARACTERS_VOTES);
  // const {lang } = useSetLanguage();
  const characters = !!data && data.characters;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <PageTitle title={t("home.title")} />
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {characters.map((character, index) => (
              <Card character={character} key={index} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
