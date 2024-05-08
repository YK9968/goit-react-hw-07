import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const nameContact = useSelector((state) => state.filter.name);
  const filterContacts = contacts.filter((contact) =>
    contact.info.name.toLowerCase().includes(nameContact.toLowerCase())
  );

  return (
    <>
      <ul className={css.contactList}>
        {filterContacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
