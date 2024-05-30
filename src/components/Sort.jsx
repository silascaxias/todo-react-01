const Sort = ({ setSort }) => {
  return (
    <div>
      <p>Alphabetical Order:</p>
      <button onClick={() => setSort('Asc')}>Asc</button>
      <button onClick={() => setSort('Desc')}>Desc</button>
    </div>
  );
};

export default Sort;
