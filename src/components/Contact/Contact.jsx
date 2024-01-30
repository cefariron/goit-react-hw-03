import css from '../Contact/Contact.module.css';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
      <div className={css.container}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
      </div>
    )
  };