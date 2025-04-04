import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import { selectFilterValue } from "../../redux/filters/selectors";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading)
    return (
      <p className={styles.loadingMessage}>Loading... Please wait a little</p>
    );
  if (error) return <p className={styles.errorMessage}>Error: {error}</p>;

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.includes(filter)
  );

  return (
    <div className={styles.contactListContainer}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
