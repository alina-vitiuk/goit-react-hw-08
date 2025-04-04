import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts, selectError } from "../../redux/contacts/selectors";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Мінімум 3 символи")
        .max(50, "Максимум 50 символів")
        .required("Обов'язкове до заповнення!"),
      number: Yup.string()
        .matches(/^\d+$/, "Номер телефону має містити мінімум 10 символів")
        .min(7, "Телефонний номер має містити мінімум 7 цифр")
        .max(15, "Телефонний номер не має містити більше ніж 15")
        .required("Обов'язкове до заповнення!"),
    }),
    onSubmit: (values, { resetForm }) => {
      const duplicate = contacts.find(
        (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (duplicate) {
        alert(`${values.name} is already in contacts!`);
        return;
      }

      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <label htmlFor="name" className={styles.label}>
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className={styles.input}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="name"
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.error}>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number" className={styles.label}>
        Number
      </label>
      <input
        id="number"
        name="number"
        type="tel"
        className={styles.input}
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="tel"
      />
      {formik.touched.number && formik.errors.number ? (
        <div className={styles.error}>{formik.errors.number}</div>
      ) : null}

      {error && <div className={styles.errorMessage}>Error: {error}</div>}

      <button type="submit" className={styles.btnSubmit}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
