import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useQuery, useMutation, useSubscription } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/operations/query";
import { ADD_VOTE } from "../graphql/operations/mutation";
import { CHANGE_VOTE_LISTENER } from "../graphql/operations/subscription";
import { Loading, PageTitle, Button } from "../components";
import { openExternalURL } from "../helpers/navigate";
export const Details = () => {
  const [idProduct] = useState(useParams().id);
  const [character, setCharacter] = useState({});
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: idProduct,
    },
  });
  const [addVote] = useMutation(ADD_VOTE, {
    update: (__, mutationResult) => {
      console.log(mutationResult.data);
    },
  });
  useSubscription(CHANGE_VOTE_LISTENER);
  useEffect(() => {
    if (data) {
      setCharacter(data.character);
    }
  }, [data]);

  const voteCharacter = (characterId) =>
    addVote({
      variables: {
        character: characterId,
      },
    });

  const goToMoreDetails = (url) => openExternalURL(url);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {character && (
        <>
          <PageTitle title={character.name} />
          <div className="row">
            <div className="col-md-5">
              <img
                className="img-fluid"
                src={character.photo}
                alt={`${character.name} profile`}
              />
            </div>
            <div className="col-lg">
              <h5 className="my-3">{character.votes} votos.</h5>
              <p>{character.description}</p>
              <Button
                key={character.id}
                label={`Votar a ${character.name}`}
                param={character.id}
                action={voteCharacter}
              />
              &nbsp;
              <Button
                key={`Wiki_${character.id}`}
                label={"Más información"}
                param={character.url}
                action={goToMoreDetails}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
