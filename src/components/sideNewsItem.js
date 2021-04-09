import React from "react";
import { Link } from "react-router-dom";
import newsPlaceholder from "../assets/images/news.jpg";
import getDate from "../helpers/getDate";

const SideNewsItem = ({ details }) => {
  return (
    <div className="sideNewsItem">
      <img
        alt="news preview"
        src={details.details.image ? details.details.image : newsPlaceholder}
      />
      <div>
        <Link to={`/post/${details.index}`}>
          <h4>{details.details.title}</h4>
        </Link>
        <span className="meta">
          <i class="far fa-clock"></i> {getDate(details.details.published_at)}
        </span>
      </div>
    </div>
  );
};

export default SideNewsItem;
