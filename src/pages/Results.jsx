import style from "./Results.module.css";

const result = {
  java: 95,
  dbms: 89,
  os: 93,
  fds: 67,
  cn: 79,
};

function Results() {
  const getColor = (mark) => {
    if (mark >= 85) return style.high;
    if (mark >= 75) return style.mid;
    return style.low;
  };

  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.header}>Results</div>

        {Object.entries(result).map(([subject, mark]) => (
          <div className={style.row} key={subject}>
            <span className={style.label}>{subject}</span>
            <span className={`${style.value} ${getColor(mark)}`}>{mark}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
