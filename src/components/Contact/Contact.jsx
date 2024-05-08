import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>
          <FaUser className={css.iconContact} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconContact} />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        className={css.btnDelete}
      >
        Delete
      </button>
    </>
  );
}
