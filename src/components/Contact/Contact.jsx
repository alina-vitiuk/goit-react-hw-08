import { useDispatch, useSelector } from "react-redux";
import { selectDeletingIds } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector(selectDeletingIds);
  const isDeleting = deletingIds.includes(id);

  const handleDelete = () => {
    if (!isDeleting) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <FaUser className="text-purple-400" />
        <span className="font-bold">{name}</span>
      </div>
      <div className={styles.phoneInfo}>
        <FaPhoneAlt className="text-pink-400" />
        <span>{number}</span>
      </div>
      <button
        className={styles.btnDelete}
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
};

export default Contact;
