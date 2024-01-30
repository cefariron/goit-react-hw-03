import { Contact } from "../Contact/Contact.jsx";

export const ContactList = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};
