import React, { useEffect, useState } from "react";
import { useNewsStore } from "../state/context";
import newsPlaceholder from "../assets/images/news.jpg";
import getDate from "../helpers/getDate";
import { useLocation } from "react-router";
import { db } from "../helpers/firebase";
import CommentItem from "../components/commentItem";
import RandomNews from "../components/randomNews";

const Post = () => {
  const article = useNewsStore();
  const [post, setPost] = useState({});
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  //Get article ID to fetch article details and comments
  const index = String(location.pathname).split("/")[2];

  useEffect(() => {
    setCurrentPost();
    getComments();
  }, [location]);

  //Set current article from global state
  const setCurrentPost = () => {
    setPost(article.news[index]);
  };

  //Check if comment is valid
  const checkComment = () => {
    if (comment.length > 0) {
      postComment();
    }
  };

  //Post comment to Firebase
  const postComment = async () => {
    try {
      await db.ref(`comments/${index}`).push({
        comment: comment,
        date: Date.now(),
      });

      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  //Get comments from database
  const getComments = async () => {
    db.ref(`/comments/${index}`).on("value", (snapshot) => {
      const retrievedComments = snapshot.val()
        ? Object.entries(snapshot.val())
        : [];
      var tempComments = [...comments];
      tempComments = tempComments.concat(retrievedComments);
      setComments(tempComments);
    });
  };

  return (
    <div className="postContainer">
      <div className="postContainerLeft">
        <hr />

        <p className="categoryText">{`#${post?.category}`}</p>

        <img
          className="mainImage"
          alt="post pic"
          src={post?.image ? post.image : newsPlaceholder}
        />

        <h1>{post?.title}</h1>

        <p className="descriptionText">{post?.description}</p>

        <span>
          <span className="meta">
            <i class="far fa-clock"></i> {getDate(post?.published_at)}
          </span>{" "}
          <span className="meta">
            {" "}
            <i class="far fa-user"></i> {post.author}
          </span>
        </span>

        <div className="commentSection">
          <h3>{`Comments (${comments.length})`}</h3>

          <textarea
            placeholder="Enter your comment"
            rows={5}
            value={comment}
            onChange={(t) => {
              setComment(t.target.value);
            }}
          ></textarea>

          <div className="submitButtonContainer">
            <button onClick={() => checkComment()}>Submit comment</button>
          </div>

          <div className="comments">
            {comments.map((item) => (
              <CommentItem key={item[0]} details={item[1]} />
            ))}
          </div>
        </div>
      </div>

      <div className="postContainerRight">
        <hr />
        <RandomNews />
      </div>
    </div>
  );
};

export default Post;
