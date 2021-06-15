import './Items.css';

function Items ({ items }) {
  const itemsList = items.map(item => (
    <div className="Items__container" key={item._id}>
      <div>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </div>
      <div className="Items__value-container">
        <p>{item.value}</p>
      </div>
    </div>
  ));

  return (
    <>
      {itemsList}
    </>
  );
}

export default Items;