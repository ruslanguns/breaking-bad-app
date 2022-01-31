import { useState, useEffect } from "react";
import { useQuery, useMutation, useSubscription } from "@apollo/client";

import { Loading, BarChart, Button, PageTitle } from "../components/";
// GraphQL Operations
import { PRINCIPAL_CHARACTERS_VOTES } from "../graphql/operations/query";
import { CHANGE_VOTES_LISTENER } from "../graphql/operations/subscription";
import { ADD_VOTE } from "../graphql/operations/mutation";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const PrincipalCharsVotes = () => {
  const { t } = useTranslation("votes");
  const [characters, setCharacters] = useState([]);
  const { loading, error, data: votes } = useQuery(PRINCIPAL_CHARACTERS_VOTES);
  const [addVote] = useMutation(ADD_VOTE, {
    update: (__, mutationResult) => {
      console.log(mutationResult.data);
    },
  });
  useSubscription(CHANGE_VOTES_LISTENER); //executes query

  useEffect(() => {
    if (votes) {
      setCharacters(votes.characters);
    }
  }, [votes]);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;

  let labels = [];
  let values = [];
  if (!loading) {
    characters.map((character) => {
      labels.push(character["name"]);
      values.push(character["votes"]);
      return "";
    });
  }

  const voteCharacter = (characterId) =>
    addVote({
      variables: {
        character: characterId,
      },
    });

  //const showDetails = (characterId) => navigateTo("details", characterId);

  const tableValues = [
    `name`,
    `actor`,
    `info`,
    `total_episodes`,
    `votes`,
    `details`,
  ];

  return (
    <>
      <PageTitle title={t("title")} />
      {!loading && (
        <>
          <div className="row">
            <div className="col-9">
              <BarChart
                titleChart={t("vote_count_for_chart")}
                labels={labels}
                dataValues={values}
              />
            </div>
            <div className="col d-grid gap-2">
              {characters.map((character) => (
                <Button
                  key={character.id}
                  label={character.name}
                  param={character.id}
                  action={voteCharacter}
                />
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
                    {tableValues.map((values, index) => (
                      <th className="text-center" key={index}>
                        {t(values)}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {characters.map((character) => (
                    <tr key={character.id}>
                      <td>{character["name"]}</td>
                      <td>{character["portrayed"]}</td>
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
                      <td>
                        <NavLink
                          to={`/breaking-bad-app/details/${character.id}`}
                          className="btn btn-info btn-lg btn-block custom-button"
                        >
                          {t(`details`)}
                        </NavLink>
                      </td>
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
