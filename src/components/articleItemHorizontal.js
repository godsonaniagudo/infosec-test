import React from "react";
import { Link } from "react-router-dom";
import newsPlaceholder from "../assets/images/news.jpg";
import getDate from "../helpers/getDate";

const ArticleItemHorizontal = (props) => {
  return (
    <div className="articleItemHorizontal">
      <img
        alt="news preview"
        src={props.details.image ? props.details.image : newsPlaceholder}
      />
      <div className="articleItemHorizontalContent">
        <Link to={`/post/${props.index}`}>
          <h2>{props.details.title}</h2>
        </Link>

        <p className="descriptionText">
          {props.details.description.length > 200
            ? String(props.details.description).substring(0, 200) + "..."
            : props.details.description}
        </p>

        <div className="metaContainer">
          <span>
            <span className="meta">
              <i class="far fa-clock"></i> {getDate(props.details.published_at)}
            </span>{" "}
            <span className="meta">
              {" "}
              <i class="far fa-user"></i>{" "}
              {props.details.author
                ? String(props.details.author).substring(0, 20)
                : "Unknown"}
            </span>
          </span>
          <span className="categoryText">{`#${props.details.category}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleItemHorizontal;
