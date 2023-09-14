import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../config/constants";

const VideoPlayer = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchVideoDetails();
  }, []);

  const fetchVideoDetails = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/" + id}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
