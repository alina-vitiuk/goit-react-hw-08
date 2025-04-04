import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import styles from "./RegisterForm.module.css";

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formWrapper}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Field className={styles.inputField} type="text" name="name" />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="div"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field className={styles.inputField} type="email" name="email" />
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="div"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <Field
              className={styles.inputField}
              type="password"
              name="password"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="div"
            />
          </div>

          <button className={styles.submitButton} type="submit">
            Register
          </button>

          <p className={styles.textLink}>
            Already have an account? <Link to="/login">Log in here</Link>.
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
