import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <div className={styles.spacing} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <SearchBox />
      <div className={styles.spacing} />
      {isLoading ? (
        <p className={styles.loadingText}>Loading... Please wait a little</p>
      ) : error ? (
        <p className={styles.errorText}>Error: {error}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default ContactsPage;
