import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import styles from "./LoginForm.module.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values)).catch(() => {
      toast.error("Invalid login or password");
    });
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formWrapper}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field
              className={styles.inputField}
              type="email"
              name="email"
              autoComplete="email"
            />
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
              autoComplete="current-password"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="div"
            />
          </div>
          <button className={styles.submitButton} type="submit">
            Log In
          </button>
          <p className={styles.signUpText}>
            No account yet?{" "}
            <Link to="/register" className={styles.signUpLink}>
              Sign up here
            </Link>
            .
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
