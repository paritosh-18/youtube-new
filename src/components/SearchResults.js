import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { YOUTUBE_API_KEY } from "../config/constants";
import SearchCard from "./SearchCard";

const SearchResults = () => {
  const { searchtext } = useParams();
  const [searchRes, setSearchRes] = useState([]);
  useEffect(() => {
    searchVideos();
  }, [searchtext]);

  const searchVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchtext}&key=${YOUTUBE_API_KEY}`
    );
    const json = await data.json();
    setSearchRes(json?.items);
  };
  return (
    <div>
      {searchRes.map((searchVideo) => {
        return (
          <Link
            to={"video/" + searchVideo?.id?.videoId}
            key={searchVideo?.id?.videoId}
          >
            <SearchCard data={searchVideo} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
