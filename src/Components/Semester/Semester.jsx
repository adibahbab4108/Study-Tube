import { useState } from "react";
import "./Semester.css";
import ReactPlayer from "react-player";
const Semester = ({ semester }) => {
  console.log(semester);
  const { number: semesterNumber, courses } = semester;
  const [playlist, setPlaylist] = useState([]);
  const [url, setUrl] = useState();
  return (
    <div>
      <h1>Semester {semesterNumber}</h1>
      <div className="courses border">
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
      <div className="playlist-container border">
        <h3>Playlist</h3>
        <div className="playlists">
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
        <div className="playlist-video">
          <ReactPlayer
            url={url}
            className="display-video"
            control="true"
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
};

export default Semester;
