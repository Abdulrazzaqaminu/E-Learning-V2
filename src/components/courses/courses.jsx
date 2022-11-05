import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import CourseItem from "../course-item/course-item.component";
import Coursesdata from "../../data.json";

import "./courses.css";
import UserHeader from "../user-header/user-header";

export default function Courses() {
  const AllCourseData = Object.values(Coursesdata);
  const [page, setPage] = useState(1);
  const { loading, error, hasMore } = {
    loading: false,
    error: false,
    hasMore: false,
  };

  const courses = Object.values(Coursesdata.courses);

  console.log(courses);

  return (
    <>
      <UserHeader />
      <div className="course_container">
        {courses.length > 0 && (
          <>
            {courses.map((video) =>
              video.noq > 0 ? (
                <Link
                  to={{
                    pathname: `/quiz/${video.youtubeID}`,
                    state: {
                      videoTitle: video.title,
                    },
                  }}
                  key={video.youtubeID}
                >
                  <CourseItem
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              ) : (
                <CourseItem
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                  key={video.youtubeID}
                />
              )
            )}
          </>
        )}
        {/* {!loading && courses.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>} */}
      </div>
    </>
  );
}
