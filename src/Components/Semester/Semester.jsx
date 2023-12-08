import { useState } from "react";
import "./Semester.css";
import ReactPlayer from "react-player";
const Semester = ({ semester }) => {
  console.log(semester);
  const { number: semesterNumber, courses } = semester;
  const [playlist, setPlaylist] = useState([]);
  const [url, setUrl] = useState();
  const [showMsg, setShowMsg] = useState(true);
  return (
    <div className="container-fluid p-4">
      <h1 className="selected-sem-name">Semester {semesterNumber}</h1>
      <div className="parent-container row">
        <div className="playlist-video col-md-8 border">
          {showMsg && <h3 className="empty-msg"> Select from playlist</h3>}
          <ReactPlayer
            url={url}
            className="react-player "
            control="true"
            width="100%"
            height="100%"
            wrapper="div"
          ></ReactPlayer>
        </div>
        <div className="course-index col-md-4">
          <div className="course-list">
            <button
              className="btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Courses <span>&#128071;</span>
            </button>
            <ol className="collapse" id="collapseExample">
              {courses.map((course) => {
                return (
                  <li
                    key={course.courseId}
                    onClick={() => {
                      setPlaylist(course.playlist);
                      setShowMsg(false);
                    }}
                    className="hover-over"
                  >
                    {course.name}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="playlists">
            <h5>Playlist</h5>
            <ol>
              {playlist.map((video) => (
                <div className="playlist">
                  {console.log(video)}
                  <li
                    key={video.id}
                    onClick={() => setUrl(video.url)}
                    className="hover-over"
                  >
                    {video.title}
                  </li>
                </div>
              ))}
            </ol>
            {showMsg && <h3 className="empty-msg"> Select Courses</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semester;
