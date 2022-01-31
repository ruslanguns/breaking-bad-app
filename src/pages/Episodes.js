import { useFetchApi } from "./../hooks/useFetchApi";
import { API_URL_BASE, API_ENDPOINTS } from "./../helpers/urls";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";
const Episodes = () => {
  const { t } = useTranslation("episodes");
  const { loading, data } = useFetchApi(
    `${API_URL_BASE}${API_ENDPOINTS.EPISODES}`
  );
  const tableValues = [`season`, `episode`, `title_table`, `air_date`, `characters`];

  return (
    <>
      <PageTitle title={t("title")} />
      {loading && <Loading />}
      {!loading && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {tableValues.map((value) => (
                  <th key={value.toLowerCase()} className="text-center">
                    {t(value)}
                  </th>
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
