import style from "./Attendance.module.css";

const attendance = {
  java: 92,
  dbms: 88,
  os: 90,
  fds: 87,
  cn: 99,
};

function Attendance() {
  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.header}>Attendance</div>

        {Object.entries(attendance).map(([subject, percent]) => (
          <div className={style.row} key={subject}>
            <div className={style.top}>
              <span className={style.label}>{subject}</span>
              <span className={style.value}>{percent}%</span>
            </div>
            <div className={style.barBg}>
              <div className={style.bar} style={{ width: `${percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
