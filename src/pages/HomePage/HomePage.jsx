import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Phonebook App!</h1>
      <p className={styles.description}>
        Manage your contacts easily and securely.
      </p>
    </div>
  );
};

export default HomePage;
