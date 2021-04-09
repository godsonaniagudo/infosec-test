import React from "react";
import avatar from "../assets/images/useravatar.svg";
import getDate from "../helpers/getDate";

const CommentItem = (props) => {
  return (
    <div className="commentItem">
      <img alt="avatar" src={avatar} />
      <div>
        <span>{getDate(props.details.date)}</span>
        <p className="commentText">{props.details.comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;
