import { useQuery } from "@apollo/client";
import { PRINCIPAL_CHARACTERS_VOTES } from "../graphql/operations/query";
import Loading from "../components/Loading";
import BarChart from "../components/BarChart";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
const PrincipalCharsVotes = () => {
  const { loading, error, data } = useQuery(PRINCIPAL_CHARACTERS_VOTES);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  const { characters } = data;
  let labels = [];
  let values = [];
  if (!loading) {
    characters.map((character) => {
      labels.push(character["name"]);
      values.push(character["votes"]);
      return "";
    });
  }

  return (
    <>
      <PageTitle title={"Principal Characters Votes"} />
      {!loading && (
        <>
          <div className="row">
            <div className="col-9">
              <BarChart
                titleChart={"Vote count bar chart"}
                labels={labels}
                dataValues={values}
              />
            </div>
            <div className="col d-grid gap-2">
              {characters.map((character, index) => (
                <Button key={index} label={character.name} />
              ))}
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Actor</th>
                    <th>Info</th>
                    <th>Total Episodes</th>
                    <th>Votes</th>
                  </tr>
                </thead>

                <tbody>
                  {characters.map((character, index) => (
                    <tr key={index}>
                      <td>{character["name"]}</td>
                      <td>{character["actor"]}</td>
                      <td>
                        <a
                          href={character["url"]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Wikipedia
                        </a>
                      </td>
                      <td>{character["total_episodes"]}</td>
                      <td>{character["votes"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PrincipalCharsVotes;
