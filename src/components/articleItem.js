import React from "react";
import { Link } from "react-router-dom";
import newsPlaceholder from "../assets/images/news.jpg";
import getDate from "../helpers/getDate";

const ArticleItem = (props) => {
  return (
    <div className="articleItem" style={{ width: props.width }}>
      <img
        alt="article preview"
        src={props.details.image ? props.details.image : newsPlaceholder}
      />

      <Link to={`/post/${props.index}`}>
        <h3>
          {props.details.title.length > 50
            ? String(props.details.title).substring(0, 50) + "..."
            : props.details.title}
        </h3>
      </Link>

      <div className="metaContainer">
        <span className="postedDate">
          <i class="far fa-clock"></i> {getDate(props.details.published_at)}
        </span>
      </div>
    </div>
  );
};

export default ArticleItem;
