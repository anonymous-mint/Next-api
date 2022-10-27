import React, { useState } from "react";

const CommentsList = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    console.log(data);
    setCommentsList(data);
  };

  const addComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
		const data = await response.json();
		console.log(data);
  };

  return (
    <div>
      <h1>Click the button to load comments list</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button type="button" onClick={addComment}>
        Add comments
      </button>
      <button type="button" onClick={fetchComments}>
        Load comments
      </button>
      {commentsList?.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default CommentsList;
