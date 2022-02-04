import { useQuery } from "@apollo/client";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { PRINCIPAL_CHARACTERS_VOTES } from "../graphql/operations/query";
import "./../configs/i18n";
import { useTranslation } from "react-i18next";
import CharacterItemLoading from "../components/CharacterItemLoading";
// import { useSetLanguage } from "../hooks/useSetLanguage";
const Home = () => {
  const { t } = useTranslation("home");
  const { loading, error, data } = useQuery(PRINCIPAL_CHARACTERS_VOTES);
  // const {lang } = useSetLanguage();
  const characters = !!data && data.characters;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <PageTitle title={t("title")} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading &&
          [...Array(6)].map((_, i) => <CharacterItemLoading key={i} />)}
        {!loading &&
          characters.map((character, index) => (
            <Card character={character} useLabel={t("more_info")} key={index} />
          ))}
      </div>
    </>
  );
};

export default Home;
