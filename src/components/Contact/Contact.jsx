export const Contact = ({ id, name, number }) => {
  return (
      <div>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button type="button">Delete</button>
      </div>
    )
  };