import style from "./Courses.module.css";
import { Link, useNavigate } from "react-router-dom";
export const courses = [
  {
    course: "Java",
    id: 1,
    instructor: "John Doe",
    credits: 4,
    duration: "4 weeks",
    Description: "Learn OOP and Java programming",
  },
  {
    course: "Python Fundamentals",
    id: 2,
    instructor: "Jane Smith",
    credits: 3,
    duration: "3 weeks",
    Description: "Master Python syntax, data structures, and scripting basics",
  },
  {
    course: "Web Development Bootcamp",
    id: 3,
    instructor: "Alex Martinez",
    credits: 5,
    duration: "6 weeks",
    Description:
      "Build responsive websites using HTML, CSS, and modern JavaScript",
  },
  {
    course: "Data Science Essentials",
    id: 4,
    instructor: "Dr. Emily Chen",
    credits: 4,
    duration: "5 weeks",
    Description:
      "Introduction to data analysis, visualization, and libraries like Pandas",
  },
  {
    course: "React & Redux",
    id: 5,
    instructor: "Michael Chang",
    credits: 4,
    duration: "4 weeks",
    Description:
      "Create dynamic single-page applications with state management",
  },
  {
    course: "SQL & Databases",
    id: 6,
    instructor: "Sarah Johnson",
    credits: 3,
    duration: "3 weeks",
    Description: "Design relational databases and write efficient SQL queries",
  },
  {
    course: "Introduction to AI",
    id: 7,
    instructor: "David Kim",
    credits: 4,
    duration: "4 weeks",
    Description:
      "Explore machine learning concepts, neural networks, and AI ethics",
  },
  {
    course: "DevOps & CI/CD",
    id: 8,
    instructor: "Taylor Brooks",
    credits: 3,
    duration: "3 weeks",
    Description:
      "Automate software deployment using Docker, GitHub Actions, and AWS",
  },
  {
    course: "UI/UX Design Principles",
    id: 9,
    instructor: "Olivia Vance",
    credits: 3,
    duration: "4 weeks",
    Description:
      "Design user-centered interfaces with wireframing and prototyping tools",
  },
  {
    course: "Cybersecurity Basics",
    id: 10,
    instructor: "Marcus Wright",
    credits: 4,
    duration: "5 weeks",
    Description:
      "Understand network security, cryptography, and defending against threats",
  },
];
function Courses() {
  // const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className={style.page}>
      <header className={style.header}>
        Available <span>Courses</span>
      </header>
      <ul className={style.grid}>
        {courses.map((c) => (
          <li key={c.id} className={style.card}>
            <span className={style.courseName}>{c.course}</span>
            <Link to={`/course/${c.id}`}>
              <button className={style.btn}>View →</button>
            </Link>
          </li>
        ))}
      </ul>
      <button className={style.backBtn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default Courses;
// to={`/courses/${c.id}`}
