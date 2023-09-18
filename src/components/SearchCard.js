import React from "react";

const SearchCard = ({ data }) => {
  return (
    <div className="border m-2 p-2 w-full bg-slate-50 flex">
      <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" />
      <div className="m-2 p-2">
        <h1 className="font-bold text-xl">{data?.snippet?.title}</h1>
        <h1 className="text-lg py-2">{data?.snippet?.channelTitle}</h1>
        <h1 className="text-sm py-1">{data?.snippet?.description}</h1>
      </div>
    </div>
  );
};

export default SearchCard;
