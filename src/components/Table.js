const Table = ({ characters }) => {
  return (
    <>
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
                <td>{character.name}</td>
                <td>{character.actor}</td>
                <td>
                  <a href={character.url} target="_blank" rel="noreferrer">
                    Wikipedia
                  </a>
                </td>
                <td>{character.total_episodes}</td>
                <td>{character.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
