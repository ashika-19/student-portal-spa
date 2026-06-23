import { useParams } from "react-router-dom";
import { courses } from "./Courses";
import { useNavigate } from "react-router-dom";
import style from "./CourseDetails.module.css";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = id - 1;
  const c = courses.at(index);

  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.courseName}>{c.course}</div>

        <div className={style.row}>
          <span className={style.label}>Instructor</span>
          <span className={style.value}>{c.instructor}</span>
        </div>

        <div className={style.row}>
          <span className={style.label}>Credits</span>
          <span className={style.value}>{c.credits}</span>
        </div>

        <div className={style.row}>
          <span className={style.label}>Duration</span>
          <span className={style.value}>{c.duration}</span>
        </div>

        <div className={style.row}>
          <span className={style.label}>Description</span>
          <span className={style.value}>{c.Description}</span>
        </div>

        <button className={style.backBtn} onClick={() => navigate(-1)}>
          ← Back to Courses
        </button>
      </div>
    </div>
  );
}

export default CourseDetails;
