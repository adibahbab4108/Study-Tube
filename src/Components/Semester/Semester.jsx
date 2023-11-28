import { useState } from "react";
import "./Semester.css";
import ReactPlayer from "react-player";
const Semester = ({ semester }) => {
  console.log(semester);
  const { number: semesterNumber, courses } = semester;
  const [playlist, setPlaylist] = useState([]);
  const [url, setUrl] = useState();
  return (
    <div className="container-fluid">
      <h1 className="text-center">Semester {semesterNumber}</h1>
      <div className="courses">
        <div className="course-name">
          <h3>Courses</h3>
          <ol>
            {courses.map((course) => {
              return (
                <li
                  key={course.courseId}
                  onClick={() => setPlaylist(course.playlist)}
                >
                  {course.name}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="playlist-container">
        <div className="playlists">
          <h3>Playlist</h3>
          <ol>
            {playlist.map((video) => (
              <div>
                {console.log(video)}
                <li key={video.id} onClick={() => setUrl(video.url)}>
                  {video.title}
                </li>
              </div>
            ))}
          </ol>
        </div>
        <div className="playlist-video col-sm-12">
          {/* <h3>Select from playlist</h3> */}
          <ReactPlayer
            url={url}
            className="react-player"
            control="true"
            width="100%"
            height="100%"
            wrapper="div"
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default Semester;
