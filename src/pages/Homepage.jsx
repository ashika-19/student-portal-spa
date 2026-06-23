import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        Student <span>Portal</span>
      </header>
      <div className={styles.para}>
        Manage your courses, results, and attendance in one place.
      </div>
      <div className={styles.btnGroup}>
        <Link to="/course">
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            View Courses
          </button>
        </Link>
        <Link to="/login">
          <button className={`${styles.btn} ${styles.btnOutline}`}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
