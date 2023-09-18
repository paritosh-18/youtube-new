import React from "react";

const SuggestedVideo = ({ data }) => {
  return (
    <div className="border m-2 px-2 w-64 bg-slate-50 flex">
      <img src={data?.snippet?.thumbnails?.default?.url} alt="thumbnail" />
      <div className="truncate">
        <h1 className="font-sm my-2">{data?.snippet?.title}</h1>
        <h1 className="text-xs">{data?.snippet?.channelTitle}</h1>
        <h1 className="text-xs py-1">{data?.statistics?.viewCount}</h1>
      </div>
    </div>
  );
};

export default SuggestedVideo;
