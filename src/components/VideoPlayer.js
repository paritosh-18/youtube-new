import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../config/constants";
import SuggestedVideo from "./SuggestedVideo";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  // const [comment, setComment] = useState("");
  const [suggested, setSuggested] = useState([]);
  const [showDesc, setShowDesc] = useState(false);
  useEffect(() => {
    fetchVideoDetails();
    // fetchComments();
  }, [id]);

  const fetchVideoDetails = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const json = await data.json();
    setVideo(json?.items);
    let categoryId = json?.items[0]?.snippet?.categoryId;
    const data2 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${categoryId}&key=${YOUTUBE_API_KEY}`
    );
    const jsonSuggested = await data2.json();
    console.log(jsonSuggested);
    setSuggested(jsonSuggested?.items);
  };

  // const fetchComments = async () => {
  //   const data = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${YOUTUBE_API_KEY}`
  //   );
  //   const json = await data.json();
  //   // console.log(json);
  // };

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  };
  return (
    <div className="flex">
      <div className="max-w-6xl px-2">
        <iframe
          id="ytplayer"
          title="player"
          type="text/html"
          width="1152"
          height="630"
          src={"https://www.youtube.com/embed/" + id}
        ></iframe>
        <h1 className="text-lg">{video[0]?.snippet?.title}</h1>
        <h1 className="text-sm">{video[0]?.snippet?.channelTitle}</h1>
        <button className="w-full delay-75" onClick={() => toggleDesc()}>
          {showDesc ? "Hide" : "Show More..."}
        </button>
        {showDesc ? (
          <p className="text-xs">{video[0]?.snippet?.description}</p>
        ) : null}
      </div>
      <div>
        {suggested.map((video2) => (
          <Link to={"/video/" + video2?.id} key={video2?.id}>
            <SuggestedVideo data={video2} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
