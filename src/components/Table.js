const Table = ({ heads, items }) => {

  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              {heads.map((element, index) => (
                <th className="text-center" key={index}>
                  {element}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((character, index) => (
              <tr key={index}>
                {Object.keys(character).forEach((key, index) => (
                  <td>{character[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

/*{
  items.map((character) => {
    let html = '';
    Object.keys(character).forEach((key, index) => {
      html += <tr>{character[key]}</tr>
      console.log(character[key])
    })
    return html;
    
  })
}*/
