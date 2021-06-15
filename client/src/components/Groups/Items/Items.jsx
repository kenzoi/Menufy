import './Items.css';

function Items ({items}) {
  const itemsList = items.map(item => (
    <div key={item._id}>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>{item.value}</p>
      </div>
  ));

  return (
    <>
      {itemsList}
    </>
  );
}

export default Items;