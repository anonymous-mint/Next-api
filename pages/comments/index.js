import React, { useState } from "react";

const CommentsList = () => {
  const [commentsList, setCommentsList] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    console.log(data);
    setCommentsList(data);
  };
  return (
    <div>
      <h1>Click the button to load comments list</h1>
      <button type="button" onClick={fetchComments}>Load comments</button>
      {commentsList?.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default CommentsList;
