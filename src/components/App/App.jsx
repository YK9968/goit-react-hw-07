import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContacts } from "../../redux/contactsOps";
import css from "./App.module.css";
import { selectIsError, selectIsLoading } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div>
      <div className={css.loaderContainer}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        {isLoading && <Loader />}
        {isError && <Error />}
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
