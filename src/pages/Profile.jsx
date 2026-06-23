import { student } from "./Dashboard";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.avatar}>👤</div>
        <div className={style.header}>Student Profile</div>
        <div className={style.row}>
          <span className={style.label}>Name</span>
          <span className={style.value}>{student.name}</span>
        </div>
        <div className={style.row}>
          <span className={style.label}>Department</span>
          <span className={style.value}>{student.department}</span>
        </div>
        <div className={style.row}>
          <span className={style.label}>Year</span>
          <span className={style.value}>{student.year}</span>
        </div>
        <div className={style.row}>
          <span className={style.label}>CGPA</span>
          <span className={style.value}>{student.cgpa}</span>
        </div>
        <div className={style.row}>
          <span className={style.label}>Mobile No</span>
          <span className={style.value}>{student.mobile}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
