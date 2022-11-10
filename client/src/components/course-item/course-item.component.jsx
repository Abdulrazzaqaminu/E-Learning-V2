import "./course.css";

export default function CourseItem({ title, id, noq }) {
  return (
    // <div className={classes.course}>
    //   <img
    //     src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
    //     alt={title}
    //   />
    //   <p>{title}</p>
    //   <div className={classes.qmeta}>
    //     <p>{noq} Questions</p>
    //     <p>Total points : {noq * 5}</p>
    //   </div>
    // </div>

    <div className="course">
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq}</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
