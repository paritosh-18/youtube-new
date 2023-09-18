import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_KEY } from "../config/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../config/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeMenu());
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link
          to={"/video/" + video?.id}
          key={video?.id}
          onClick={() => handleClick()}
        >
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
