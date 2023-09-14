import React from "react";

const VideoCard = ({ data }) => {
  return (
    <div className="border m-2 w-64 bg-slate-50">
      <img
        src={data?.snippet?.thumbnails?.high?.url}
        alt="thumbnail"
        className="w-full h-44"
      />
      <h1 className="font-semibold p-2">{data?.snippet?.title}</h1>
      <h1 className="text-xs px-2">{data?.snippet?.channelTitle}</h1>
      <h1 className="text-xs px-2 py-1">{data?.statistics?.viewCount}</h1>
    </div>
  );
};

export default VideoCard;
