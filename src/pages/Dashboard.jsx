import style from "./Dashboard.module.css";
import { Link, Outlet } from "react-router-dom";
export const student = {
  name: "John Doe",
  department: "CSE",
  cgpa: 8,
  year: 2,
  mobile: 9945978999,
};
function Dashboard() {
  return (
    <div className={style.page}>
      <h1 className={style.header}>Dashboard</h1>

      <nav className={style.nav}>
        <Link to="profile">Profile</Link>
        <Link to="results">Results</Link>
        <Link to="attendance">Attendance</Link>
      </nav>

      <div className={style.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
