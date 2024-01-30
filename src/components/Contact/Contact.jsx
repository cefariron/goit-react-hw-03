import css from "../Contact/Contact.module.css";
import { MdLocalPhone } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p>
          <MdLocalPhone  className={css.icon}/> {name}
        </p>
        <p>
          <IoMdContact  className={css.icon}/> {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
